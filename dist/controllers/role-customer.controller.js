"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCustomerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RoleCustomerController = class RoleCustomerController {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    async find(id, filter) {
        return this.roleRepository.customers(id).find(filter);
    }
    async create(id, customer) {
        return this.roleRepository.customers(id).create(customer);
    }
    async patch(id, customer, where) {
        return this.roleRepository.customers(id).patch(customer, where);
    }
    async delete(id, where) {
        return this.roleRepository.customers(id).delete(where);
    }
};
exports.RoleCustomerController = RoleCustomerController;
tslib_1.__decorate([
    (0, rest_1.get)('/roles/{id}/customers', {
        responses: {
            '200': {
                description: 'Array of Role has many Customer',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Customer) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleCustomerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/roles/{id}/customers', {
        responses: {
            '200': {
                description: 'Role model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Customer) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Customer, {
                    title: 'NewCustomerInRole',
                    exclude: ['id'],
                    optional: ['roleId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleCustomerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/roles/{id}/customers', {
        responses: {
            '200': {
                description: 'Role.Customer PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Customer, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Customer))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleCustomerController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/roles/{id}/customers', {
        responses: {
            '200': {
                description: 'Role.Customer DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Customer))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleCustomerController.prototype, "delete", null);
exports.RoleCustomerController = RoleCustomerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.RoleRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RoleRepository])
], RoleCustomerController);
//# sourceMappingURL=role-customer.controller.js.map