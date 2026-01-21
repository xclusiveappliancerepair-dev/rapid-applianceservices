import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY || "re_HRuudchL_NNXyVAffRHjp1CuH4SJcEEXY")

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { name, phone, email, appliance, customAppliance, message } = body

    if (!name || !phone || !email || !appliance || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const applianceType = appliance === "Other" ? customAppliance : appliance

    const htmlEmail = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Repair Estimate Request</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f5f5f5;
            }
            .container {
              background: white;
              border-radius: 8px;
              padding: 30px;
              box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            .header {
              text-align: center;
              padding-bottom: 20px;
              border-bottom: 3px solid #2563eb;
              margin-bottom: 30px;
            }
            .header h1 {
              color: #2563eb;
              margin: 0;
              font-size: 24px;
            }
            .info-row {
              margin-bottom: 20px;
              padding: 15px;
              background: #f9fafb;
              border-radius: 6px;
              border-left: 4px solid #2563eb;
            }
            .info-label {
              font-weight: 600;
              color: #1f2937;
              margin-bottom: 5px;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .info-value {
              color: #4b5563;
              font-size: 16px;
            }
            .message-box {
              background: #f9fafb;
              padding: 20px;
              border-radius: 6px;
              border: 1px solid #e5e7eb;
              margin-top: 20px;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
              color: #6b7280;
              font-size: 12px;
            }
            .urgent {
              display: inline-block;
              background: #ef4444;
              color: white;
              padding: 4px 12px;
              border-radius: 4px;
              font-size: 12px;
              font-weight: 600;
              margin-bottom: 10px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔧 New Repair Estimate Request</h1>
              <p style="color: #6b7280; margin: 10px 0 0 0;">Rapid Appliance Service</p>
            </div>
            
            <div class="urgent">NEW REQUEST</div>
            
            <div class="info-row">
              <div class="info-label">Customer Name</div>
              <div class="info-value">${name}</div>
            </div>
            
            <div class="info-row">
              <div class="info-label">Phone Number</div>
              <div class="info-value"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></div>
            </div>
            
            <div class="info-row">
              <div class="info-label">Email Address</div>
              <div class="info-value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>
            </div>
            
            <div class="info-row">
              <div class="info-label">Appliance Type</div>
              <div class="info-value">${applianceType}</div>
            </div>
            
            <div class="message-box">
              <div class="info-label" style="margin-bottom: 10px;">Issue Description</div>
              <div class="info-value">${message}</div>
            </div>
            
            <div class="footer">
              <p>This email was sent from the Rapid Appliance Service website contact form.</p>
              <p>Please respond to the customer within 24 hours.</p>
            </div>
          </div>
        </body>
      </html>
    `

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["xclusiveappliancerepair@gmail.com"],
      subject: `New Repair Request: ${applianceType} - ${name}`,
      html: htmlEmail,
      replyTo: email,
    })

    if (error) {
      return NextResponse.json(
        {
          error: "Failed to send email",
          details: error.message || "Unknown error",
        },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
