import { Entity } from '@loopback/repository';
export declare class Customer extends Entity {
    id?: number;
    name: string;
    website: string;
    address: string;
    roleId?: number;
    constructor(data?: Partial<Customer>);
}
export interface CustomerRelations {
}
export type CustomerWithRelations = Customer & CustomerRelations;
