import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  try {
    const transporter = await nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "jahongirmh@gmail.com",
        pass: "7008779a",
      },
      from: "jahongirmh@gmail.com",
    });

    const mailOptions = {
      from: "jahongirmh@gmail.com",
      to: options.to,
      subject: options.subject,
      html: options.text,
    };

    const result = await transporter.sendMail(mailOptions);

    return { info: result, err };
  } catch (err) {
    return { err, info };
  }
};

export default sendEmail;
