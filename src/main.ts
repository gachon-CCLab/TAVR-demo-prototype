import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger Code
  const config = new DocumentBuilder()
    .setTitle('Base of Nest.js')
    .setDescription('This is the base structure of my Nest.js Projects')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // End of Swagger Code

  await app.listen(process.env.APP_PORT);
}
bootstrap();
