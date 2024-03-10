import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { fetchNewsletterEmail } from "../../../../libs/data/public/common";

const { MG_USER, MG_PWD, MG_REGION } = process.env;

const transporter = nodemailer.createTransport({
  host: MG_REGION,
  port: 25,
  secure: false,
  auth: {
    user: MG_USER,
    pass: MG_PWD,
  },
});

export async function POST(request: NextRequest) {
  const { slug } = await request.json();

  try {
    const newsletterEmails = await fetchNewsletterEmail();
    const emailArray = newsletterEmails.map((data) => data.email);
    const data = {
      from: "sympetrum@ekimo-studio.com",
      bcc: emailArray,
      subject: "Mail depuis le site sympetrum",
      text: "test",
      html: `
<body><div dir="ltr" class="es-wrapper-color"><!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"><v:fill type="tile" color="#e9e8e6"></v:fill></v:background><![endif]--><table class="es-wrapper" style="background-position:center top" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table cellpadding="0" cellspacing="0" class="es-content esd-header-popover" align="center"><tbody><tr><td class="es-adaptive esd-stripe" esd-custom-block-id="4755" align="center"><table class="es-content-body" style="background-color:#fff" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tbody><tr><td class="esd-structure es-p15t es-p10b es-p10r es-p10l" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" width="580" valign="top" align="center"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td align="center" class="esd-block-image" style="font-size:0"><a target="_blank"><img class="adapt-img" src="https://demo.stripocdn.email/content/guids/36780ac2-2bdf-4d4d-a39c-cd1f78ef8b68/images/logosympetrum.jpg" alt style="display:block" width="310"></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tbody><tr><td class="esd-structure" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" width="600" valign="top" align="center"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-block-text es-p30t es-p30b" bgcolor="#ffffff" align="center"><h1 style="line-height:120%;font-family:&quot;color:#0b0c0b">Les actualités du Groupe Sympetrum</h1></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td class="esd-structure es-p20t es-p15b es-p20r es-p20l" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" width="560" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-block-text es-p10b" align="center"><p style="color:#333;font-size:16px">Cher(e) abonné(e),</p><p style="color:#333;font-size:16px">Nous sommes heureux de vous informer qu'une nouvelle circulaire vient d'être publiée sur Sympetrum. Vous trouverez ci-dessous le lien vous permettant de la découvrir.</p></td></tr><tr><td class="esd-block-text es-p10b" align="center"><p style="color:#333">En vous remerciant,</p></td></tr><tr><td class="esd-block-button es-p10t es-p10r es-p10l h-auto" align="center" height="60"><span class="es-button-border" style="display:inline-block;height:100%;background:#c72b2c"><a href="https://sympetrum.ekimo-studio.com/circulaires/${slug}" class="es-button" target="_blank" style="display:inline-block;height:100%;line-height:60px;background:#c72b2c;mso-border-alt:10px solid #c72b2c;text-decoration:none;padding:0 20px;color:#fff">Lire les dernières actus</a></span></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td class="esd-structure" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" width="600" valign="top" align="center"><table width="100%" cellspacing="0" cellpadding="0" bgcolor="#180605" style="background-color:#180605"><tbody><tr><td align="center" class="esd-empty-container" style="display:none"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div></body>
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
