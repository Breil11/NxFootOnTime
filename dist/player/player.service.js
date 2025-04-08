"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const player_entity_1 = require("./player.entity");
const team_service_1 = require("../team/team.service");
const team_entity_1 = require("../team/team.entity");
let PlayerService = class PlayerService {
    constructor(playerRepository, teamService, teamRepository) {
        this.playerRepository = playerRepository;
        this.teamService = teamService;
        this.teamRepository = teamRepository;
    }
    createPlayer(createPlayerDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const player = this.playerRepository.create(createPlayerDto);
            return this.playerRepository.save(player);
        });
    }
    getAllPlayers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.playerRepository.find();
        });
    }
    getPlayerById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const player = yield this.playerRepository.findOne({ where: { id } });
            if (!player) {
                throw new common_1.NotFoundException(`The player with ${id} not found`);
            }
            return player;
        });
    }
    updatePlayer(id, updatePlayerDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const player = yield this.getPlayerById(id);
            Object.assign(player, updatePlayerDto);
            return this.playerRepository.save(player);
        });
    }
    deletePlayer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.playerRepository.delete(id);
            if (result.affected === 0) {
                throw new common_1.NotFoundException(`The player with ${id} not found`);
            }
        });
    }
    updatePlayerTeam(playerId, teamId, updatePlayerDto, updateTeamDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const player = yield this.getPlayerById(playerId);
            Object.assign(player, updatePlayerDto);
            yield this.playerRepository.save(player);
            const team = yield this.teamService.getTeamById(teamId);
            this.teamRepository.update(team, updateTeamDto);
            yield this.teamRepository.save(team);
            return player;
        });
    }
};
PlayerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(player_entity_1.Player)),
    __param(2, (0, typeorm_1.InjectRepository)(team_entity_1.Team)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        team_service_1.TeamService,
        typeorm_2.Repository])
], PlayerService);
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map