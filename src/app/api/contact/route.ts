import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const { BREVO_USER, BREVO_PWD, BREVO_SERVER } = process.env;

const transporter = nodemailer.createTransport({
  host: BREVO_SERVER,
  port: 587,
  secure: false,
  auth: {
    user: BREVO_USER,
    pass: BREVO_PWD,
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
      from: "noreply@sympetrum.fr",
      to: "contact.sympetrum@gmail.com",
      subject: "Mail depuis le site sympetrum",
      text: message?.toString(),
      html: `
            <b>De :</b> ${name} <br />
            <b>Email :</b> ${email} <br />
            <b>Téléphone :</b> ${number} <br />
            <b>Sujet :</b> ${subject} <br />
            <b>Message :</b> ${message}
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
