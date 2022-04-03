const sendEmail = require('../utils/sendEmail')

const leadCtrl = {
  sendLead: async (req, res) => {
    const { firstName, lastName, email, tel, message } = req.body
    const newMessage = `
      <h3>User: ${firstName} ${lastName}</h3>
      <h3>Phone: ${tel}<h3/>
      <h3>Email: <a href="mailto:${email}">${email}</a><h3/>
      <h3>Message ✉</h3>
      <p>${message}</p>      
    `

    try {
      const result = await sendEmail({
        from: email,
        to: "kvadratmetr01@gmail.com",
        subject: "New request from supremeGrill!",
        text: newMessage,
      });
      res.json({
        message: "Your message has been sent!"
      });
    } catch (err) {
      console.log(err);
      res.json({message: err.message})
    }
  },
};

module.exports = leadCtrl;
