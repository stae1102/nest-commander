import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    return {
      type: 'mysql',
      host: this.configService.get<string>('DB_HOST'),
      port: +this.configService.get<number>('DB_PORT'),
      username: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_DATABASE'),
      entities: [__dirname + '/entities/*.entity{.ts,.js}'],
      synchronize: this.configService.get<string>('NODE_ENV') === 'prod' ? false : true,
      namingStrategy: new SnakeNamingStrategy(),
    };
  }
}
