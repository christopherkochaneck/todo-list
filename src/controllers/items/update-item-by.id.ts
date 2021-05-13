import { Request, Response } from 'express';
import { logger } from '../../util/logger';
import { readItems, writeItems } from '../../data';

interface Params {
  id: string;
}

interface RequestBody {
  title?: string;
  description?: string;
  parentId?: string;
  done?: boolean;
}

export function updateItem(req: Request<Params, {}, RequestBody>, res: Response) {
  logger.controller('item', 'updateItem');
  logger.debug('reqBody:', req.body);

  // get all Items
  const items = readItems();

  //get item by id
  const foundIndex = items.findIndex((x) => x.id === req.params.id);
  if (foundIndex === -1) {
    return res.status(404).send('Item not found');
  }
  const item = items[foundIndex];
  item.title = req.body.title ? req.body.title : item.title;
  item.description = req.body.description ? req.body.description : item.description;
  item.parentId = req.body.parentId ? req.body.parentId : item.parentId;
  item.done = req.body.done != undefined ? req.body.done : item.done;

  items[foundIndex] = item;

  writeItems(items);

  return res.status(200).send(item);
}
