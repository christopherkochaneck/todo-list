import { Request, Response } from 'express';
import { logger } from '../../util/logger';
import { readItems } from '../../data';

interface Params {
  id: string;
}

/**
 * Get Item by ID
 */
export function getItemByID(req: Request<Params>, res: Response) {
  logger.controller('items', 'getItems');

  const items = readItems();

  //find item
  const foundItems = items.filter((x) => x.id === req.params.id);
  if (foundItems.length === 0) {
    return res.status(404).send('Item not found');
  }

  const foundItem = foundItems[0];

  return res.status(200).send(foundItem);
}
