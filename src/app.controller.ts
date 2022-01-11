import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SendMailDto } from './send-mail.dto';
import { MailService } from './mail.service';

@Controller()
export class AppController {
  constructor(private readonly mailService: MailService) { }

  @Post('mail')
  async sendMail(@Body() sendMailDto: SendMailDto) {
    return await this.mailService.sendMail(sendMailDto);
  }
}
