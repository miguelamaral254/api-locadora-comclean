// src/domain/models/Media.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Status } from './Status';
import { Movie } from './Movie';
import { Rental } from './Rental';

@Entity({ name: 'Media' })
export class Media {
    @PrimaryGeneratedColumn({ name: 'id' })
    private id: number;

    @Column({ name: 'section' })
    private section: number;

    @Column({ name: 'location', length: 100 })
    private location: string;

    @Column({ name: 'type', length: 20 })
    private type: string;

    @ManyToOne(() => Status, { eager: true })
    private status: Status;

    @ManyToOne(() => Movie, { eager: true })
    private movie: Movie;

    @ManyToOne(() => Rental, (rental) => rental.media)
    private rental: Rental;

    // Getters and setters
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getSection(): number {
        return this.section;
    }

    public setSection(section: number): void {
        this.section = section;
    }

    public getLocation(): string {
        return this.location;
    }

    public setLocation(location: string): void {
        this.location = location;
    }

    public getType(): string {
        return this.type;
    }

    public setType(type: string): void {
        this.type = type;
    }

    public getStatus(): Status {
        return this.status;
    }

    public setStatus(status: Status): void {
        this.status = status;
    }

    public getMovie(): Movie {
        return this.movie;
    }

    public setMovie(movie: Movie): void {
        this.movie = movie;
    }

    public getRental(): Rental {
        return this.rental;
    }

    public setRental(rental: Rental): void {
        this.rental = rental;
    }
}
