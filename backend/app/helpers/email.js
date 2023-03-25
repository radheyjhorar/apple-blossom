const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const emailConfig  =  require("../config/email.config");
const path = require('path');
const fs = require('fs');

exports.sendEmail = async () =>  {

    
  try {
        const transporter = nodemailer.createTransport(
            emailConfig[0]
        );
        const filePath = path.join(__dirname, './email-templates/welcome-school.html');
const source = fs.readFileSync(filePath, 'utf-8').toString();
const template = handlebars.compile(source);
const replacements = {
    username: "Kamal Kaur"
};
const htmlToSend = template(replacements);
    
        await transporter.sendMail({
        
            from: '"Vikash Saharan" <vikashpkl@gmail.com>',
            to: "kkamaldeep658@gmail.com",
            subject: "Hello from node",
            text: "Hello world?",
            html: htmlToSend,
            headers: { 'x-myheader': 'test header' }
          
    }).then(info => console.log(`Message sent: ${info.response}`))
    .catch(err => console.log(`Problem sending email: ${err}`));
   } catch($e) {
     console.log($e);
   }
    
};


 

