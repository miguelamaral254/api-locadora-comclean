// src/domain/models/Customer.ts

import { Entity, Column, OneToMany } from 'typeorm';
import { Person } from './Person';
import { Rental } from './Rental';

@Entity({ name: 'Customer' })
export class Customer extends Person {
    @OneToMany(() => Rental, (rental) => rental.customer)
    private rentals: Rental[];

    // Getters and setters
    public getRentals(): Rental[] {
        return this.rentals;
    }

    public setRentals(rentals: Rental[]): void {
        this.rentals = rentals;
    }
}
