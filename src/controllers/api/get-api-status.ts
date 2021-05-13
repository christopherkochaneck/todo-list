import { Request, Response } from 'express';
import { logger } from '../../util/logger';
const packageJson = require('../../../package.json');

/**
 * GET API status, name, author and version number
 */
export function getApiStatus(req: Request, res: Response) {
  logger.controller('api', 'getApiStatus');

  const { name, description, author, version } = packageJson;

  return res.status(200).send({
    api: 'online',
    name,
    description,
    author,
    version,
  });
}
