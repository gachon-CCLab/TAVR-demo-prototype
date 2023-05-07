import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }), 
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    TypeOrmModule.forRoot({
      type:'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: ['../entities/*.ts'],
      // synchronize는 맨처음 테이블 만들때만 사용하고 false로 바꾼다
      synchronize: false,
      // 개발할때는 logging을 켜논다. ORM이 SQL로 파싱할 때 비효율적으로 코드를 짤 수 있으므로 확인해야 함
      logging:true,
      // hot reloading을 하므로 DB 연결을 연결시켜야 함
      keepConnectionAlive:true,
      charset: 'utf8mb4'
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
