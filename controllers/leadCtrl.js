// const sgMail = require('@sendgrid/mail')

// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const sendMail = async (msg) => {
//   try {
//     await sgMail.send(msg)
//     console.log("Message sent successfully!");
//   } catch (error) {
//     console.error(error);

//     if(error.response) {
//       console.error(error.response.body);
//     }
//   }
// }

const sendEmail = require('../utils/sendEmail')

const leadCtrl = {
  getLeads: async (req, res) => {
    const message = `
      <h3>User: John Doe</h3>
      <h3>Phone: +961252602<h3/>
      <h3>Email: <a href="mailto:kia@gmail.com">kia@gmail.com</a><h3/>
      <h3>Message ✉</h3>
      <p>Please go to this link to log In your account</p>      
      `
    try {
      const result = await sendEmail({
        from: "asad99@gmail.com",
        to: "kvadratmetr01@gmail.com",
        subject: "New request from supremeGrill!",
        text: message,
      });
      res.json({
        messages: "Your message has been sent!"
      });
    } catch (err) {
      console.log(err);
      res.json({message: err.message})
    }
  },
  createLead: async (req, res) => {
    try {
      
      res.status(201).json({ message: "Created lead" });
    } catch (err) {
      return res.error.handleError(res, err);
    }
  }
};

module.exports = leadCtrl;
