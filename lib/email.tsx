import nodemailer from "nodemailer";
import type { Booking } from "./bookings-storage";

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Send confirmation email to customer
export async function sendCustomerConfirmation(booking: Booking) {
  const serviceNames: Record<string, string> = {
    physiotherapy: "Physiotherapy",
    "athletic-therapy": "Athletic Therapy",
    "massage-therapy": "Massage Therapy",
    "accidental-therapy": "Accidental Therapy",
  };

  const mailOptions = {
    from: `"Lepro Wellness Centre" <${
      process.env.EMAIL_FROM || process.env.EMAIL_USER
    }>`,
    to: booking.email,
    subject: "Booking Confirmation - Lepro Wellness Centre",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981 0%, #14b8a6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .detail-row { padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
            .detail-label { font-weight: bold; color: #059669; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Booking Confirmed!</h1>
            </div>
            <div class="content">
              <p>Dear ${booking.name},</p>
              <p>Thank you for booking with Lepro Wellness Centre. We have received your booking request and will contact you shortly to confirm your appointment.</p>
              
              <div class="booking-details">
                <h2 style="color: #059669; margin-top: 0;">Booking Details</h2>
                <div class="detail-row">
                  <span class="detail-label">Booking ID:</span> ${booking.id}
                </div>
                <div class="detail-row">
                  <span class="detail-label">Name:</span> ${booking.name}
                </div>
                <div class="detail-row">
                  <span class="detail-label">Email:</span> ${booking.email}
                </div>
                ${
                  booking.phone
                    ? `
                <div class="detail-row">
                  <span class="detail-label">Phone:</span> ${booking.phone}
                </div>
                `
                    : ""
                }
                ${
                  booking.service
                    ? `
                <div class="detail-row">
                  <span class="detail-label">Service:</span> ${
                    serviceNames[booking.service] || booking.service
                  }
                </div>
                `
                    : ""
                }
                <div class="detail-row">
                  <span class="detail-label">Message:</span> ${booking.message}
                </div>
                <div class="detail-row" style="border-bottom: none;">
                  <span class="detail-label">Status:</span> <span style="color: #f59e0b;">Pending</span>
                </div>
              </div>

              <p>Our team will review your request and get back to you within 24 hours to schedule your appointment.</p>
              
              <p>If you have any questions, please don't hesitate to contact us at ${
                process.env.EMAIL_FROM || process.env.EMAIL_USER
              } or call us at +1 (234) 567-890.</p>
              
              <div class="footer">
                <p>Best regards,<br><strong>Lepro Wellness Centre Team</strong></p>
                <p style="margin-top: 20px;">123 Wellness Street, Health City, HC 12345</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
}

// Send notification email to admin/owner
export async function sendAdminNotification(booking: Booking) {
  const serviceNames: Record<string, string> = {
    physiotherapy: "Physiotherapy",
    "athletic-therapy": "Athletic Therapy",
    "massage-therapy": "Massage Therapy",
    "accidental-therapy": "Accidental Therapy",
  };

  const mailOptions = {
    from: `"Lepro Wellness Centre" <${
      process.env.EMAIL_FROM || process.env.EMAIL_USER
    }>`,
    to: process.env.ADMIN_EMAIL,
    cc: "george@leprowellnesscenter.ca", // <-- Add this line
    subject: `New Booking Request - ${booking.name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .detail-row { padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
            .detail-label { font-weight: bold; color: #2563eb; }
            .action-button { display: inline-block; background: linear-gradient(135deg, #10b981 0%, #14b8a6 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Booking Request</h1>
            </div>
            <div class="content">
              <p><strong>You have received a new booking request!</strong></p>
              
              <div class="booking-details">
                <h2 style="color: #2563eb; margin-top: 0;">Customer Details</h2>
                <div class="detail-row">
                  <span class="detail-label">Booking ID:</span> ${booking.id}
                </div>
                <div class="detail-row">
                  <span class="detail-label">Name:</span> ${booking.name}
                </div>
                <div class="detail-row">
                  <span class="detail-label">Email:</span> <a href="mailto:${
                    booking.email
                  }">${booking.email}</a>
                </div>
                ${
                  booking.phone
                    ? `
                <div class="detail-row">
                  <span class="detail-label">Phone:</span> <a href="tel:${booking.phone}">${booking.phone}</a>
                </div>
                `
                    : ""
                }
                ${
                  booking.service
                    ? `
                <div class="detail-row">
                  <span class="detail-label">Service Requested:</span> ${
                    serviceNames[booking.service] || booking.service
                  }
                </div>
                `
                    : ""
                }
                <div class="detail-row">
                  <span class="detail-label">Message:</span><br>${
                    booking.message
                  }
                </div>
                <div class="detail-row" style="border-bottom: none;">
                  <span class="detail-label">Submitted:</span> ${new Date(
                    booking.createdAt
                  ).toLocaleString()}
                </div>
              </div>

              <p>Please review this booking and contact the customer to confirm their appointment.</p>
              
              <div style="text-align: center;">
                <a href="${
                  process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
                }/admin/dashboard" class="action-button">
                  View in Dashboard
                </a>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
}
