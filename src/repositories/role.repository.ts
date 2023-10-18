import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {Role, RoleRelations, Customer} from '../models';
import {CustomerRepository} from './customer.repository';

export class RoleRepository extends DefaultCrudRepository<
  Role,
  typeof Role.prototype.id,
  RoleRelations
> {

  public readonly customers: HasManyRepositoryFactory<Customer, typeof Role.prototype.id>;

  constructor(
    @inject('datasources.PG') dataSource: PgDataSource, @repository.getter('CustomerRepository') protected customerRepositoryGetter: Getter<CustomerRepository>,
  ) {
    super(Role, dataSource);
    this.customers = this.createHasManyRepositoryFactoryFor('customers', customerRepositoryGetter,);
    this.registerInclusionResolver('customers', this.customers.inclusionResolver);
  }
}
