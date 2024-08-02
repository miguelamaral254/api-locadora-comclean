import { Movie } from '../../../domain/models/Movie';

export interface IMovieRepository {
    findById(id: number): Promise<Movie>;
    save(movie: Movie): Promise<Movie>;
    // Outros métodos necessários
}
