import { Router } from 'express';
import { MovieController } from '../controllers/MovieController';
import { GetMovieUseCase } from '../../application/use-cases/movies/GetMovieUseCase';
import { CreateMovieUseCase } from '../../application/use-cases/movies/CreateMovieUseCase';
import { MovieRepository } from '../../infrastructure/repositories/MovieRepository';

const movieRouter = Router();
const movieRepository = new MovieRepository();
const getMovieUseCase = new GetMovieUseCase(movieRepository);
const createMovieUseCase = new CreateMovieUseCase(movieRepository);
const movieController = new MovieController(getMovieUseCase, createMovieUseCase);

movieRouter.get('/movies/:id', (req, res) => movieController.getMovie(req, res));
movieRouter.post('/movies', (req, res) => movieController.createMovie(req, res));

export { movieRouter };
