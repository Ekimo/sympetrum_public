import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.imitate.email",
  port: 587,
  secure: false,
  auth: {
    user: "a94f9ad1-f9ea-48e2-ae21-018dc6aed67c",
    pass: "f39f5429-2a11-4b22-891d-a719003a86c0",
  },
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const { name, email, number, subject, message } = {
      name: formData.get("name"),
      email: formData.get("email"),
      number: formData.get("number"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    const data = {
      from: "sympetrum@theomaillard69-personal-nwbz.imitate.email",
      to: "theomaillard69@gmail.com",
      subject: "Mail depuis le site sympetrum",
      text: message?.toString(),
      html: `
            <b>From:</b> ${name} <br /> 
            <b>Email:</b> ${email} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Message:</b> ${message} 
        `,
    };

    const response = await transporter.sendMail(data);
    console.log(response);
    return NextResponse.json(
      { message: "Email send successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
