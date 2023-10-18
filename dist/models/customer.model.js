"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Customer = class Customer extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Customer = Customer;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Customer.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "website", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "address", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        name: 'role_id'
    }),
    tslib_1.__metadata("design:type", Number)
], Customer.prototype, "roleId", void 0);
exports.Customer = Customer = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Customer);
//# sourceMappingURL=customer.model.js.map