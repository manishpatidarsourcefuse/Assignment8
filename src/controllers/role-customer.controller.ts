import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Role,
  Customer,
} from '../models';
import {RoleRepository} from '../repositories';

export class RoleCustomerController {
  constructor(
    @repository(RoleRepository) protected roleRepository: RoleRepository,
  ) { }

  @get('/roles/{id}/customers', {
    responses: {
      '200': {
        description: 'Array of Role has many Customer',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Customer)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Customer>,
  ): Promise<Customer[]> {
    return this.roleRepository.customers(id).find(filter);
  }

  @post('/roles/{id}/customers', {
    responses: {
      '200': {
        description: 'Role model instance',
        content: {'application/json': {schema: getModelSchemaRef(Customer)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Role.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer, {
            title: 'NewCustomerInRole',
            exclude: ['id'],
            optional: ['roleId']
          }),
        },
      },
    }) customer: Omit<Customer, 'id'>,
  ): Promise<Customer> {
    return this.roleRepository.customers(id).create(customer);
  }

  @patch('/roles/{id}/customers', {
    responses: {
      '200': {
        description: 'Role.Customer PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer, {partial: true}),
        },
      },
    })
    customer: Partial<Customer>,
    @param.query.object('where', getWhereSchemaFor(Customer)) where?: Where<Customer>,
  ): Promise<Count> {
    return this.roleRepository.customers(id).patch(customer, where);
  }

  @del('/roles/{id}/customers', {
    responses: {
      '200': {
        description: 'Role.Customer DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Customer)) where?: Where<Customer>,
  ): Promise<Count> {
    return this.roleRepository.customers(id).delete(where);
  }
}
