import { Movie } from '../../../domain/models/Movie';

export interface IMovieService {
    getMovie(id: number): Promise<Movie>;
    createMovie(movieData: Partial<Movie>): Promise<Movie>;
    // Outros métodos necessários
}
