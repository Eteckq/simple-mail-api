import { Injectable } from '@nestjs/common';
import { SendMailDto } from './send-mail.dto';
const mailgun = require("mailgun-js");

const DOMAIN = 'yohangastoud.fr';
const KEY = "api-key"

const mg = mailgun({ apiKey: KEY, domain: DOMAIN });
mg.options.host = 'api.eu.mailgun.net'

@Injectable()
export class MailService {

  async sendMail(sendMailDto: SendMailDto) {
    const data = {
      from: `${sendMailDto.name} <${sendMailDto.from}>`,
      to: 'yohan.gastoud@gmail.com',
      subject: 'Message from ' + DOMAIN,
      text: sendMailDto.message
    };


    return new Promise((resolve, reject) => {
      mg.messages().send(data, function (error, body) {
        if (error) {
          reject(error)
        } else {
          resolve(body)
        }
      });
    })
  }
}