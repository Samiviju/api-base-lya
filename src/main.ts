import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('BASE-WEB-API')
    .setDescription('Api base para o sistema de RH')
    .setVersion('0.0.1')
    .build()

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('swagger', app, document)

  await app.listen(3000);
}
bootstrap();

