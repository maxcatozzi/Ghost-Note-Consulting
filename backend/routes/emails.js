const router = require('express').Router();
const sendGrid = require('@sendgrid/mail');
require('dotenv').config();

const sendgridKey = process.env.SENDGRID_API_KEY;

router.post('/send', (req, res) => {
  console.log(req.body);
  sendGrid.setApiKey(sendgridKey);
  const msg = {
    to: 'markpattonlmfcc@gmail.com',
    from: 'markpattonlmfcc@gmail.com',
    subject: 'A new client has contacted you!',
    text: req.body.message
  }
  sendGrid.send(msg)
    .then(result => {
      res.status(200).json({
        success: true
      });
    })
    .catch(err => {
      console.log('error: ', err);
      res.status(401).json({
        success: false
      });
    });
});

module.exports = router;