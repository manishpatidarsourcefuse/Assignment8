import { DefaultCrudRepository } from '@loopback/repository';
import { PgDataSource } from '../datasources';
import { Customer, CustomerRelations } from '../models';
export declare class CustomerRepository extends DefaultCrudRepository<Customer, typeof Customer.prototype.id, CustomerRelations> {
    constructor(dataSource: PgDataSource);
}
