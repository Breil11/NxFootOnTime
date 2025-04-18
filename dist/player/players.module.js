"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayersModule = void 0;
const common_1 = require("@nestjs/common");
const player_service_1 = require("./player.service");
const typeorm_1 = require("@nestjs/typeorm");
const player_entity_1 = require("./player.entity");
const player_controller_1 = require("./player.controller");
const team_module_1 = require("../team/team.module");
const team_entity_1 = require("../team/team.entity");
const team_service_1 = require("../team/team.service");
let PlayersModule = class PlayersModule {
};
PlayersModule = __decorate([
    (0, common_1.Module)({
        providers: [player_service_1.PlayerService, team_service_1.TeamService],
        imports: [typeorm_1.TypeOrmModule.forFeature([player_entity_1.Player, team_entity_1.Team]), team_module_1.TeamModule],
        controllers: [player_controller_1.PlayerController],
    })
], PlayersModule);
exports.PlayersModule = PlayersModule;
//# sourceMappingURL=players.module.js.map