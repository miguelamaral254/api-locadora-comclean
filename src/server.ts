import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Movie } from './domain/models/Movie';

const dataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Movie],
    synchronize: true,
});

dataSource.initialize()
    .then(() => console.log('Data Source has been initialized!'))
    .catch(err => console.error('Error during Data Source initialization:', err));
