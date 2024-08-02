// src/domain/models/Employee.ts

import { Entity, Column } from 'typeorm';
import { Person } from './Person';

@Entity({ name: 'Employee' })
export class Employee extends Person {
    @Column({ name: 'ctps', length: 20 })
    private ctps: string;

    @Column({ name: 'salary', type: 'decimal', precision: 10, scale: 2 })
    private salary: number;

    @Column({ name: 'hireDate' })
    private hireDate: Date;

    @Column({ name: 'terminationDate', nullable: true })
    private terminationDate?: Date;

    // Getters and setters
    public getCtps(): string {
        return this.ctps;
    }

    public setCtps(ctps: string): void {
        this.ctps = ctps;
    }

    public getSalary(): number {
        return this.salary;
    }

    public setSalary(salary: number): void {
        this.salary = salary;
    }

    public getHireDate(): Date {
        return this.hireDate;
    }

    public setHireDate(hireDate: Date): void {
        this.hireDate = hireDate;
    }

    public getTerminationDate(): Date | undefined {
        return this.terminationDate;
    }

    public setTerminationDate(terminationDate: Date | undefined): void {
        this.terminationDate = terminationDate;
    }
}
