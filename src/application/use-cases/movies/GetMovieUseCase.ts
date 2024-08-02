import { IMovieRepository } from '../../interfaces/repositories/IMovieRepository';
import { Movie } from '../../../domain/models/Movie';

export class GetMovieUseCase {
    constructor(private movieRepository: IMovieRepository) {}

    public async execute(id: number): Promise<Movie> {
        return this.movieRepository.findById(id);
    }
}
