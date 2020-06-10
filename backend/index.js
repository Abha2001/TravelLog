const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const errorHandlers = require('./middleware/errorHandlers');
const travelRouter = require('./routes/routes');

require('dotenv').config();

const port = process.env.PORT || 8000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then((db)=>{
  console.log("connected to db ")
})
.catch((err)=>{
  console.log(err);
})

const app = express();

app.use(morgan('common'));
app.use(helmet());

app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Travel Log',
  });
});

app.use('/logs', travelRouter);

app.use(errorHandlers.notFound);
app.use(errorHandlers.errorHandler);

app.listen(port, () => {
    console.log(`server running on http://localhost/${port}`);
});
