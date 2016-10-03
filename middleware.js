var middleware = {

  requireAuthentication: (request, response, next) => {
    console.log('private route hit!');
    next();
  },

  logger: (request, response, next) => {
    console.log(`[${new Date().toString()}] Request: ${request.method} ${request.originalUrl}`);
    next();
  },

};

module.exports = middleware;