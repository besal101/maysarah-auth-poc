import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "no-reply@maysarah.store",
    to: email,
    subject: "Welcome To Maysara - Your business Friend",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  });
};
