/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const globalPrefix = "api";
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.INTERNAL_API_PORT || 3333;
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: false,
      validationError: { target: false },
      whitelist: true,
    })
  );

  // ****************** Documentação da API com Swagger **************** //

  const config = new DocumentBuilder()
    .setTitle("RAC - SmartMedical API")
    .setDescription(
      "API oficial do SmartMedical."
    )
    .setVersion("1.0")
    .addTag("app")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  // *********************************************************** //

  await app.listen(port, () => {
    Logger.log("Listening at http://localhost:" + port + "/" + globalPrefix);
  });
}

bootstrap();
