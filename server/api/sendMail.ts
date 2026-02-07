import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  const data = await readBody(event);

  const toEmail: string = process.env.NUXT_NODEMAILER_EMAIL_TO!;
  const username: string = process.env.NUXT_NODEMAILER_AUTH_USER!;
  const password: string = process.env.NUXT_NODEMAILER_AUTH_PASS!;

  let sent = false;
  let message = "";

  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: username,
      pass: password,
    },
  });

  const mailOptions = {
    replyTo: data.email,
    to: toEmail,
    subject: "LCP - Formulaire de contact",
    html: `<p>${data.message}</p>`,
    text: data.message,
  };

  try {
    await transporter.sendMail(mailOptions);
    sent = true;
    message = `Thank you for your message, ${data?.name}!`;
  } catch (e) {
    console.log(e);
    message = "An error has occurred while sending the email!";
    sent = false;
  }

  return { sent, message };
});
