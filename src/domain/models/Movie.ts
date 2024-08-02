// src/domain/models/Movie.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Media } from './Media';

@Entity({ name: 'Movie' })
export class Movie {
    @PrimaryGeneratedColumn({ name: 'id' })
    private id: number;

    @Column({ name: 'title', length: 100 })
    private title: string;

    @Column({ name: 'year' })
    private year: number;

    @Column({ name: 'synopsis', type: 'text' })
    private synopsis: string;

    @OneToMany(() => Media, (media) => media.movie)
    private media: Media[];

    // Getters and setters
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getYear(): number {
        return this.year;
    }

    public setYear(year: number): void {
        this.year = year;
    }

    public getSynopsis(): string {
        return this.synopsis;
    }

    public setSynopsis(synopsis: string): void {
        this.synopsis = synopsis;
    }

    public getMedia(): Media[] {
        return this.media;
    }

    public setMedia(media: Media[]): void {
        this.media = media;
    }
}
