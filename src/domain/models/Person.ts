// src/domain/models/Person.ts

import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Phone } from './Phone';
import { Address } from './Address';

@Entity({ name: 'Person' })
export class Person {
    @PrimaryGeneratedColumn({ name: 'id' })
    private id: number;

    @Column({ name: 'cpf', length: 14, unique: true })
    private cpf: string;

    @Column({ name: 'name', length: 100 })
    private name: string;

    @Column({ name: 'birthDate' })
    private birthDate: Date;

    @Column({ name: 'email', length: 100, unique: true })
    private email: string;

    @OneToMany(() => Phone, (phone) => phone.person, { cascade: true })
    private phones: Phone[];

    @Column(() => Address)
    private address: Address;

    // Getters and setters
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getBirthDate(): Date {
        return this.birthDate;
    }

    public setBirthDate(birthDate: Date): void {
        this.birthDate = birthDate;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getPhones(): Phone[] {
        return this.phones;
    }

    public setPhones(phones: Phone[]): void {
        this.phones = phones;
    }

    public getAddress(): Address {
        return this.address;
    }

    public setAddress(address: Address): void {
        this.address = address;
    }
}
