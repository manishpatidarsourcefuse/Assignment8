import { Count, Filter, Where } from '@loopback/repository';
import { Role, Customer } from '../models';
import { RoleRepository } from '../repositories';
export declare class RoleCustomerController {
    protected roleRepository: RoleRepository;
    constructor(roleRepository: RoleRepository);
    find(id: number, filter?: Filter<Customer>): Promise<Customer[]>;
    create(id: typeof Role.prototype.id, customer: Omit<Customer, 'id'>): Promise<Customer>;
    patch(id: number, customer: Partial<Customer>, where?: Where<Customer>): Promise<Count>;
    delete(id: number, where?: Where<Customer>): Promise<Count>;
}
