// src/domain/models/Phone.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Person } from './Person';

@Entity({ name: 'Phone' })
export class Phone {
    @PrimaryGeneratedColumn({ name: 'id' })
    private id: number;

    @Column({ name: 'number', length: 20 })
    private number: string;

    @ManyToOne(() => Person, (person) => person.phones)
    private person: Person;

    // Getters and setters
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNumber(): string {
        return this.number;
    }

    public setNumber(number: string): void {
        this.number = number;
    }

    public getPerson(): Person {
        return this.person;
    }

    public setPerson(person: Person): void {
        this.person = person;
    }
}
