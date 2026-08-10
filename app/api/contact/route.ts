import { contactSchema } from "@/app/schemas/contactSchema";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return Response.json(
        {
          error: "Invalid form data",
        },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const response = await resend.emails.send({
      from: "My Portfolio <onboarding@resend.dev>",
      to: ["dashaklsh1507@gmail.com"],
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h2>New message from portfolio</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    if (response.error) {
      console.error("Resend email error:", response.error);
      return NextResponse.json(
        { error: response.error.message ?? "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}