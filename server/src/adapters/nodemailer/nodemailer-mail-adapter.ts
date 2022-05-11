import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "./../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "00fcf8a119ec45",
    pass: "b586683ed56f6c",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Gustavo Teixeira <gustavont.dev@gmail.com>",
      subject,
      html: body,
    });
  }
}
