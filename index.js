'use strict';
const Sms = require('./sms')

exports.sms = (request, response) => {
  const sms = new Sms();
  sms.send(request.body.message, request.body.to).then(smsReceipt => {
    response.status(200).send(JSON.stringify(smsReceipt));
  })
};
