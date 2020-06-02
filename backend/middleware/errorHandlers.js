const notFound = (req, res, next) => {
  const error = new Error(`Error 404: Not found ${req.originalUrl}`);
  res.statusCode = 404;
  next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? null : error.stack,
  });
};

module.exports = {
  notFound,
  errorHandler,
};
