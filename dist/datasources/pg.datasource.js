"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'PG',
    connector: 'postgresql',
    url: '',
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: 'Manish@123456789',
    database: 'postgres'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let PgDataSource = class PgDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
exports.PgDataSource = PgDataSource;
PgDataSource.dataSourceName = 'PG';
PgDataSource.defaultConfig = config;
exports.PgDataSource = PgDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.PG', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], PgDataSource);
//# sourceMappingURL=pg.datasource.js.map