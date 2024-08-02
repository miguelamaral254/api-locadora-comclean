import { IMovieRepository } from '../../domain/repositories/interfaces/IMovieRepository';
import { Movie } from '../../domain/models/Movie';

export class MovieRepository implements IMovieRepository {
    // Implementação dos métodos do repositório

    public async findById(id: number): Promise<Movie> {
        // Mock ou implementação real
        return new Movie(/* Dados mock ou reais */);
    }

    public async save(movie: Movie): Promise<Movie> {
        // Mock ou implementação real
        return movie;
    }
}
