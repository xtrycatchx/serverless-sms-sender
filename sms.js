const client = require('twilio')
const config = require('./twilio.config.json')

class Sms {
    constructor() {
        this._client = client(config.twilioAccounSID, config.twilioAuthToken)
    }

    send(message, to) {
        return this._client.messages.create({
            from: config.twilioDeveloperPhone,
            to: to,
            body: message
        }).then(receipt => Promise.resolve({ sent: receipt.sid }))
    }

}

module.exports = Sms;