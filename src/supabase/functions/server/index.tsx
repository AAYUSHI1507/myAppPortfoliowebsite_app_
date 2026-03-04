import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-03ed5896/health", (c) => {
  return c.json({ status: "ok" });
});

// Get EmailJS configuration endpoint (safe to expose - these are meant for browser use)
app.get("/make-server-03ed5896/emailjs-config", (c) => {
  const publicKey = Deno.env.get("EMAILJS_PUBLIC_KEY");
  const serviceId = Deno.env.get("EMAILJS_SERVICE_ID");
  const templateId = Deno.env.get("EMAILJS_TEMPLATE_ID");

  return c.json({
    publicKey: publicKey || "",
    serviceId: serviceId || "",
    templateId: templateId || "",
  });
});

// Contact form email endpoint
app.post("/make-server-03ed5896/send-email", async (c) => {
  try {
    const { name, email, message } = await c.req.json();

    // Validate input
    if (!name || !email || !message) {
      console.log("Email send error: Missing required fields");
      return c.json({ error: "Name, email, and message are required" }, 400);
    }

    // Get EmailJS credentials from environment
    const publicKey = Deno.env.get("EMAILJS_PUBLIC_KEY");
    const serviceId = Deno.env.get("EMAILJS_SERVICE_ID");
    const templateId = Deno.env.get("EMAILJS_TEMPLATE_ID");
    
    console.log("EmailJS Config Check:");
    console.log("- Public Key:", publicKey ? `${publicKey.substring(0, 10)}...` : "NOT SET");
    console.log("- Service ID:", serviceId ? `${serviceId.substring(0, 10)}...` : "NOT SET");
    console.log("- Template ID:", templateId ? `${templateId.substring(0, 10)}...` : "NOT SET");
    
    if (!publicKey || !serviceId || !templateId) {
      console.log("Email send error: EmailJS credentials not configured");
      return c.json({ 
        error: "Email service not configured. Please add EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, and EMAILJS_TEMPLATE_ID.",
        missing: {
          publicKey: !publicKey,
          serviceId: !serviceId,
          templateId: !templateId
        }
      }, 500);
    }

    console.log("Attempting to send email via EmailJS...");

    // Send email using EmailJS REST API
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          name: name,
          email: email,
          message: message,
        },
      }),
    });

    const responseText = await response.text();
    
    if (!response.ok) {
      console.log("EmailJS API error response:", responseText);
      console.log("EmailJS API error status:", response.status);
      return c.json({ 
        error: "Failed to send email", 
        details: responseText,
        hint: "Please verify your EmailJS Public Key, Service ID, and Template ID at https://dashboard.emailjs.com"
      }, response.status);
    }

    console.log("Email sent successfully via EmailJS:", responseText);
    return c.json({ success: true, message: "Email sent successfully" });
    
  } catch (error) {
    console.log("Email send error in contact form endpoint:", error);
    return c.json({ error: "Internal server error while sending email", details: String(error) }, 500);
  }
});

Deno.serve(app.fetch);