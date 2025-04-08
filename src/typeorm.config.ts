import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { join } from 'path';

export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.TYPEORM_HOST || 'db', 
      port: parseInt(process.env.TYPEORM_PORT, 10) || 5432, 
      username: process.env.TYPEORM_USERNAME || 'postgres',
      password: process.env.TYPEORM_PASSWORD || 'postgres',
      database: process.env.TYPEORM_DATABASE || 'postgres',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      migrations: ['dist/migrations/*.js'],
      migrationsRun: true,
      autoLoadEntities: true,
      synchronize: true,
    };
  }
}