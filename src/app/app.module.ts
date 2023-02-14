import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from '../config/database/config.service';
import { DBControlModule } from '../database/database.module';

@Module({
  imports: [
    /* Configuration Modules */
    ConfigModule.forRoot({ isGlobal: true, cache: true, envFilePath: `.env.dev` }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),

    /* Command Modules */
    DBControlModule,
  ],
})
export class AppModule {}
