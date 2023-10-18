"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let RoleRepository = class RoleRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, customerRepositoryGetter) {
        super(models_1.Role, dataSource);
        this.customerRepositoryGetter = customerRepositoryGetter;
        this.customers = this.createHasManyRepositoryFactoryFor('customers', customerRepositoryGetter);
        this.registerInclusionResolver('customers', this.customers.inclusionResolver);
    }
};
exports.RoleRepository = RoleRepository;
exports.RoleRepository = RoleRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.PG')),
    tslib_1.__param(1, repository_1.repository.getter('CustomerRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.PgDataSource, Function])
], RoleRepository);
//# sourceMappingURL=role.repository.js.map