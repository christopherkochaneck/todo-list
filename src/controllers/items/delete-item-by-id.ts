import { Request, Response } from 'express';
import { logger } from '../../util/logger';
import { readItems, writeItems } from '../../data';

interface Params {
  id: string;
}

export function deleteItemByID(req: Request<Params>, res: Response) {
  logger.controller('items', 'deleteItemByID');

  const items = readItems();

  //find item to delete
  const itemToDelete = items.findIndex((x) => x.id === req.params.id);
  if (itemToDelete === -1) {
    return res.status(404).send(`Item with id ${req.params.id} not found`);
  }

  const filteredItems = items.filter((x) => x.id !== req.params.id);
  writeItems(filteredItems);
  return res.status(200).send(filteredItems);
}
