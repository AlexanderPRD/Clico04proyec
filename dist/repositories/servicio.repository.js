"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ServicioRepository = class ServicioRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, usuarioRepositoryGetter) {
        super(models_1.Servicio, dataSource);
        this.usuarioRepositoryGetter = usuarioRepositoryGetter;
        this.serorig = this.createBelongsToAccessorFor('serorig', usuarioRepositoryGetter);
        this.registerInclusionResolver('serorig', this.serorig.inclusionResolver);
    }
};
ServicioRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.Mongos')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('UsuarioRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongosDataSource, Function])
], ServicioRepository);
exports.ServicioRepository = ServicioRepository;
//# sourceMappingURL=servicio.repository.js.map