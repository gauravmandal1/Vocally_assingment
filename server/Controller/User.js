import User from "../Models/user.js";
import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pseudopsy0@gmail.com",
    pass: "shyurftvwysyhcuf",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default {
  onCreateUser: async (req, res) => {
    try {
      const { name, email } = req.body;
      const user = new User({
        name,
        email,
      });

      const newUser = await user.save();
      console.log({"user created":newUser.name})
      var mailOptions = {
        from: ' "Verify your mail " <pseudopsy0@gmail.com> ',
        to: user.email,
        subject: "Pseudo -veifiy your mail",
        html: `<h2> ${user.name} ! Thanks for registering on our site 
                  <h4> Download the app now...</h4>
                  <a href="http://${req.headers.host}/user/veify-email?token=${user.emailToken}">Verify your Email</a>`,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Veification mail sent to your gmail account");
        }
      });

      return res.status(200).json({ success: true, newUser });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, errormessage: error });
    }
  },
};
