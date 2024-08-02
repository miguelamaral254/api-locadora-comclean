// src/domain/models/Status.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Status' })
export class Status {
    @PrimaryGeneratedColumn({ name: 'id' })
    private id: number;

    @Column({ name: 'name', length: 50 })
    private name: string;

    // Getters and setters
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }
}
