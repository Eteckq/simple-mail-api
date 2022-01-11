import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailService } from './mail.service';
import { ShellService } from './shell.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ShellService, MailService],
})
export class AppModule { }
