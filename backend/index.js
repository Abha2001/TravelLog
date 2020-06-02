const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const errorHandlers = require('./middleware/errorHandlers');
const travelRouter = require('./routes/routes');

require('dotenv').config();

const port = process.env.PORT || 8000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(morgan('common'));
app.use(helmet());

app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('connected to db!');
});

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello world',
//   });
// });

app.use('/logs', travelRouter);

app.use(errorHandlers.notFound);
app.use(errorHandlers.errorHandler);

app.listen(port, () => {
    console.log(`server running on http://localhost/${port}`);
});
