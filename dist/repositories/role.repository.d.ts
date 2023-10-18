import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { PgDataSource } from '../datasources';
import { Role, RoleRelations, Customer } from '../models';
import { CustomerRepository } from './customer.repository';
export declare class RoleRepository extends DefaultCrudRepository<Role, typeof Role.prototype.id, RoleRelations> {
    protected customerRepositoryGetter: Getter<CustomerRepository>;
    readonly customers: HasManyRepositoryFactory<Customer, typeof Role.prototype.id>;
    constructor(dataSource: PgDataSource, customerRepositoryGetter: Getter<CustomerRepository>);
}
