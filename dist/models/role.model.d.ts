import { Entity } from '@loopback/repository';
import { Customer } from './customer.model';
export declare class Role extends Entity {
    id?: number;
    name?: string;
    description?: string;
    customers: Customer[];
    constructor(data?: Partial<Role>);
}
export interface RoleRelations {
}
export type RoleWithRelations = Role & RoleRelations;
