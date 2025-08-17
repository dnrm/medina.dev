import mail from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { address, emailContent } = await req.json();

    // Verify API key is set
    if (!process.env.SENDGRID_KEY) {
      return NextResponse.json(
        {
          message: "Sendgrid API key is not set. Contact your administrator.",
        },
        { status: 500 }
      );
    }

    // Verify destination address is set
    if (!address) {
      return NextResponse.json(
        {
          message: "Missing destination address.",
        },
        { status: 400 }
      );
    }

    // Verify email content isn't empty
    if (!emailContent) {
      return NextResponse.json(
        {
          message: "Missing email content (it cannot be empty).",
        },
        { status: 400 }
      );
    }

    const message = {
      personalizations: [
        {
          to: [
            {
              email: address,
            },
          ],
        },
      ],
      from: {
        email: "daniel@medina.com",
        name: "Daniel Medina",
      },
      replyTo: {
        email: address,
      },
      subject: `medina.dev Inquiry from ${address}`,
      templateId: "d-a31292f98cb3486484c754f99c61fe0d",
      dynamicTemplateData: {
        email: address,
        message_content: emailContent,
      },
    };

    mail.setApiKey(process.env.SENDGRID_KEY);
    const response = await mail.send(message);

    return NextResponse.json({
      message: response,
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        error: error,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      message: "Method not allowed, please use POST.",
    },
    { status: 405 }
  );
}
