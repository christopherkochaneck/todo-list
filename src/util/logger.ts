import twLogger from 'tw-logger';

export const logger = {
  db: logDb,
  debug: logDebug,
  error: logError,
  http: logHttp,
  info: logInfo,
  silly: logSilly,
  success: logSuccess,
  verbose: logVerbose,
  warn: logWarn,
  controller: logController,
  middleware: logMiddleware,
};

function logDb(message: string, ...meta: any) {
  twLogger.db(message, ...meta);
}
function logDebug(message: string, ...meta: any) {
  twLogger.debug(message, ...meta);
}
function logError(message: string, ...meta: any) {
  twLogger.error(message, ...meta);
}
function logHttp(message: string, ...meta: any) {
  twLogger.http(message, ...meta);
}
function logInfo(message: string, ...meta: any) {
  twLogger.info(message, ...meta);
}
function logSilly(message: string, ...meta: any) {
  twLogger.silly(message, ...meta);
}
function logSuccess(message: string, ...meta: any) {
  twLogger.success(message, ...meta);
}
function logVerbose(message: string, ...meta: any) {
  twLogger.verbose(message, ...meta);
}
function logWarn(message: string, ...meta: any) {
  twLogger.warn(message, ...meta);
}

/** Log controller
 *
 * @description
 * Logs a debug message in the format of the example
 *
 * @example
 * '[controller] NAME/FN ...meta'
 *
 * @param {string} name Controller name
 * @param {string} fn Controller function name
 * @param {any} meta Additional meta data
 */
function logController(name: string, fn: string, ...meta: any) {
  twLogger.debug(`[controller] ${name}/${fn}`, ...meta);
}

/** Log middleware
 *
 * @description
 * Logs a debug message in the format of the example
 *
 * @example
 * '[middleware] FN ...meta'
 *
 * @param {string} fn Middleware function name
 * @param {any} meta Additional meta data
 */
function logMiddleware(fn: string, ...meta: any) {
  twLogger.debug(`[middleware] ${fn}`, ...meta);
}
