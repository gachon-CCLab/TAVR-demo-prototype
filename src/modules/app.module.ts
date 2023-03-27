import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
