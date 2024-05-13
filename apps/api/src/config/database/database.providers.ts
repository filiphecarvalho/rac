import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

/**
 * Configurar para produção os caminhos mais diretos, ajuda a melhorar o tempo de inicialização da aplicação:
 * https://github.com/nestjs/typeorm/issues/203#issuecomment-573100885
 */
const DatabaseProviders = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) =>
    ({
      type: config.get('DB_CONNECTION', 'postgres'),
      host: config.get('DB_HOST', 'localhost'),
      port: config.get<number>('DB_PORT', 8000),
      username: config.get('DB_USERNAME', 'postgres'),
      password: config.get('DB_PASSWORD', 'admin123'),
      database: config.get('DB_NAME', 'medical'),
      entities: [config.get(__dirname + 'DB_ENTITIES', __dirname + '/entities/*.entity{.ts,.js}')],
      migrations: [config.get(__dirname + 'DB_MIGRATIONS', __dirname + '/migrations/*{.ts,.js}')],
      subscribers: [__dirname + '/subscribers/*.subscribers{.ts,.js}'],
      migrationsDir: [config.get('DB_MIGRATIONS', __dirname + '/migrations')],
      autoLoadEntities: config.get<boolean>('DB_AUTOLOAD', false), // false em prd
      synchronize: config.get<boolean>('DB_SYNCHRONIZE', false), // false em prd
      migrationsTableName: config.get(
        'DB_MIGRATION_TABLE_NAME',
        'released_migration',
      ),
      logging: config.get('DB_lOGGING', false), // exibir as querys
      cli: {
        entitiesDir: __dirname + '/entities',
        migrationsDir: __dirname + '/migrations',
        subscribersDir: __dirname + '/subscribers',
      },
    }) as TypeOrmModuleOptions,
});

export default DatabaseProviders;
