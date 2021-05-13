import { Request, Response } from 'express';
import { logger } from '../../util/logger';
import { readItems } from '../../data';

/**
 * Get all items
 */
export function getItems(req: Request, res: Response) {
  logger.controller('items', 'getItems');
  const items = readItems();
  return res.status(200).send(items);
}
