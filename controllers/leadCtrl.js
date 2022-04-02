const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendMail = async (msg) => {
  try {
    await sgMail.send(msg)
    console.log("Message sent successfully!");
  } catch (error) {
    console.error(error);

    if(error.response) {
      console.error(error.response.body);
    }
  }
}

const leadCtrl = {
  getLeads: async (req, res) => {
    try {
      sendMail({
        to: "jahongirmh@gmail.com",
        from: "jahongirmh@gmail.com",
        subject: "New message from supremeGrill",
        html: `<p>This is your password</p>
        <h1>225036<h1/>
        <p>Please go to this link to log In your account</p>
        <a href="#" clicktracking=off>Unknovn@gmail.com</a>`
        
      })
      res.json({
        messages: "Send Lead"
      });
    } catch (err) {
      return res.error.serverErr(res, err);
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
