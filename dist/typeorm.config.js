"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmConfigService = void 0;
const path_1 = require("path");
class TypeOrmConfigService {
    createTypeOrmOptions() {
        return {
            type: 'postgres',
            host: process.env.TYPEORM_HOST || 'db',
            port: parseInt(process.env.TYPEORM_PORT, 10) || 5432,
            username: process.env.TYPEORM_USERNAME || 'postgres',
            password: process.env.TYPEORM_PASSWORD || 'postgres',
            database: process.env.TYPEORM_DATABASE || 'postgres',
            entities: [(0, path_1.join)(__dirname, '**', '*.entity.{ts,js}')],
            migrations: ['dist/migrations/*.js'],
            migrationsRun: true,
            autoLoadEntities: true,
            synchronize: true,
        };
    }
}
exports.TypeOrmConfigService = TypeOrmConfigService;
//# sourceMappingURL=typeorm.config.js.map