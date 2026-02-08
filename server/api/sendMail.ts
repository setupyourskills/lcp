import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

const TOEMAIL: string = process.env.NUXT_NODEMAILER_EMAIL_TO!;
const USERNAME: string = process.env.NUXT_NODEMAILER_AUTH_USER!;
const PASSWORD: string = process.env.NUXT_NODEMAILER_AUTH_PASS!;

let transporter: Transporter | null = null;
const initTransporter = (): Transporter => {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: USERNAME,
        pass: PASSWORD,
      },
    });
  }
  return transporter;
};

export default defineEventHandler(async (event) => {
  const data = await readBody(event);

  if (typeof data !== "object" || !data?.email || !data?.message) {
    return createError({
      statusCode: 400,
      statusMessage: "Invalid payload",
      data: { sent: false, message: "Missing required fields." },
    });
  }

  const mailOptions = {
    replyTo: data.email,
    to: TOEMAIL,
    subject: "A user has just sent a message via your contact form.",
    html: `<p>${data.message}</p>`,
    text: data.message,
  };

  try {
    await initTransporter().sendMail(mailOptions);
    return {
      sent: true,
      message: "Message sent",
    };
  } catch (e) {
    return createError({
      statusCode: 500,
      statusMessage: "Email could not be sent",
      data: {
        sent: false,
        message: "An internal error occurred while sending your email.",
      },
    });
  }
});
