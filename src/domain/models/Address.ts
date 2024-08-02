// src/domain/models/Address.ts

import { Column } from 'typeorm';

export class Address {
    @Column({ name: 'street', length: 100 })
    private street: string;

    @Column({ name: 'number', length: 10 })
    private number: string;

    @Column({ name: 'neighborhood', length: 50 })
    private neighborhood: string;

    @Column({ name: 'city', length: 50 })
    private city: string;

    @Column({ name: 'state', length: 2 })
    private state: string;

    @Column({ name: 'zipCode', length: 10 })
    private zipCode: string;

    // Getters and setters
    public getStreet(): string {
        return this.street;
    }

    public setStreet(street: string): void {
        this.street = street;
    }

    public getNumber(): string {
        return this.number;
    }

    public setNumber(number: string): void {
        this.number = number;
    }

    public getNeighborhood(): string {
        return this.neighborhood;
    }

    public setNeighborhood(neighborhood: string): void {
        this.neighborhood = neighborhood;
    }

    public getCity(): string {
        return this.city;
    }

    public setCity(city: string): void {
        this.city = city;
    }

    public getState(): string {
        return this.state;
    }

    public setState(state: string): void {
        this.state = state;
    }

    public getZipCode(): string {
        return this.zipCode;
    }

    public setZipCode(zipCode: string): void {
        this.zipCode = zipCode;
    }
}
