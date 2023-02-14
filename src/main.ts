import { Logger } from '@nestjs/common';
import { CommandFactory } from 'nest-commander';
import { AppModule } from './app/app.module';

async function bootstrap() {
  await CommandFactory.run(AppModule, {
    logger: new Logger(),
    errorHandler: (error) => {
      console.error(error);
      process.exit(1);
    },
  });
}
bootstrap();
