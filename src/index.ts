import express from 'express';
import { movieRouter } from './interfaces/routes/movieRoutes';

const app = express();

app.use(express.json());
app.use('/api', movieRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
