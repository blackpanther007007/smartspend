import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import Connection from './database/db.js';
import Auth from './routes/auth.js';
import Transaction from './routes/transactions.js';

const app = express();

const PORT = 5000;

Connection();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/user', Auth);
app.use('/transaction', Transaction);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));