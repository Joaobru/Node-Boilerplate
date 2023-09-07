import express from 'express';
import cors from 'cors';

import { router } from './routes';

const app = express();

// Rules
app.use(cors());
app.use(express.json());
app.use('/api/v1', router);

export { app };
