// src/domain/models/Rental.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Customer } from './Customer';
import { Employee } from './Employee';
import { Media } from './Media';

@Entity({ name: 'Rental' })
export class Rental {
    @PrimaryGeneratedColumn({ name: 'id' })
    private id: number;

    @Column({ name: 'rentalDate' })
    private rentalDate: Date;

    @Column({ name: 'dueDate' })
    private dueDate: Date;

    @Column({ name: 'returnDate', nullable: true })
    private returnDate?: Date;

    @Column({ name: 'totalAmount', type: 'decimal', precision: 10, scale: 2 })
    private totalAmount: number;

    @Column({ name: 'fine', type: 'decimal', precision: 10, scale: 2, nullable: true })
    private fine?: number;

    @Column({ name: 'paymentMethod', length: 20 })
    private paymentMethod: string;

    @ManyToOne(() => Employee, { eager: true })
    private employee: Employee;

    @ManyToOne(() => Customer, { eager: true })
    private customer: Customer;

    @ManyToMany(() => Media, { eager: true })
    @JoinTable()
    private media: Media[];

    // Getters and setters
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getRentalDate(): Date {
        return this.rentalDate;
    }

    public setRentalDate(rentalDate: Date): void {
        this.rentalDate = rentalDate;
    }

    public getDueDate(): Date {
        return this.dueDate;
    }

    public setDueDate(dueDate: Date): void {
        this.dueDate = dueDate;
    }

    public getReturnDate(): Date | undefined {
        return this.returnDate;
    }

    public setReturnDate(returnDate: Date | undefined): void {
        this.returnDate = returnDate;
    }

    public getTotalAmount(): number {
        return this.totalAmount;
    }

    public setTotalAmount(totalAmount: number): void {
        this.totalAmount = totalAmount;
    }

    public getFine(): number | undefined {
        return this.fine;
    }

    public setFine(fine: number | undefined): void {
        this.fine = fine;
    }

    public getPaymentMethod(): string {
        return this.paymentMethod;
    }

    public setPaymentMethod(paymentMethod: string): void {
        this.paymentMethod = paymentMethod;
    }

    public getEmployee(): Employee {
        return this.employee;
    }

    public setEmployee(employee: Employee): void {
        this.employee = employee;
    }

    public getCustomer(): Customer {
        return this.customer;
    }

    public setCustomer(customer: Customer): void {
        this.customer = customer;
    }

    public getMedia(): Media[] {
        return this.media;
    }

    public setMedia(media: Media[]): void {
        this.media = media;
    }
}
