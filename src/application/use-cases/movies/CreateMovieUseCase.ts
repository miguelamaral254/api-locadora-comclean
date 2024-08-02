import { IMovieRepository } from '../../interfaces/repositories/IMovieRepository';
import { Movie } from '../../../domain/models/Movie';

export class CreateMovieUseCase {
    constructor(private movieRepository: IMovieRepository) {}

    public async execute(movieData: Partial<Movie>): Promise<Movie> {
        const movie = new Movie(/* Inicialize com os dados */);
        return this.movieRepository.save(movie);
    }
}
