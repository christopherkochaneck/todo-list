console.clear();
import logger from 'tw-logger';
logger.debug('Starting application...');

import { app } from './app';
import http from 'http';
import debug from 'debug';
import { createDatabase } from './data';

//set Port
const port = 3001;
app.set('port', port);

//create HTTP Server
const server = http.createServer(app);

//listen on provided port
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Function to set up additional stuff.
 * This function gets executed ad soon as the server is listening.
 */
function setUp() {
  createDatabase();
}

/**
 * Event listener for HTTP server "error" event
 * @param {any} err Error
 */
function onError(err: any) {
  if (err.syscall !== 'listen') {
    throw err;
  }

  const bind = typeof port === 'string' ? `pipe ${port}` : `port ${port}`;

  //handle specific listen errors with friendly messages
  switch (err.code) {
    case 'EACCES':
      logger.error(`${bind} required elevated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use`);
      process.exit(1);
    default:
      throw err;
  }
}

/**
 * Event listener for HTTP server "listening" event
 * @param err
 */
function onListening(err: any) {
  const adress = server.address();
  const bind = typeof port === 'string' ? `pipe ${port}` : `port ${port}`;

  debug(`Listening on ${bind}...`);
  logger.info(`Listening on ${bind}...`);

  setUp();
}
