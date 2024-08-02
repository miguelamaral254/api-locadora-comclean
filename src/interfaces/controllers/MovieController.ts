import { Request, Response } from 'express';
import { GetMovieUseCase } from '../../application/use-cases/movies/GetMovieUseCase';
import { CreateMovieUseCase } from '../../application/use-cases/movies/CreateMovieUseCase';

export class MovieController {
    constructor(
        private getMovieUseCase: GetMovieUseCase,
        private createMovieUseCase: CreateMovieUseCase
    ) {}

    public async getMovie(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id, 10);
        const movie = await this.getMovieUseCase.execute(id);
        res.json(movie);
    }

    public async createMovie(req: Request, res: Response): Promise<void> {
        const movieData = req.body;
        const movie = await this.createMovieUseCase.execute(movieData);
        res.status(201).json(movie);
    }
}
