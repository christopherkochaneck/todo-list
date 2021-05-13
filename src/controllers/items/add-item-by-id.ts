import { Request, Response } from 'express';
import { logger } from '../../util/logger';
import { readItems, writeItems } from '../../data';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { Item } from '../../types/item';

interface RequestBody {
  title: string;
  description?: string;
  parentId?: string;
}

export function addItem(req: Request<{}, {}, RequestBody>, res: Response) {
  logger.controller('items', 'addItem');
  logger.debug('reqBody:', req.body);

  //get all Items
  const items = readItems();

  //const new Item
  const newItem: Item = {
    id: uuidv4(),
    title: req.body.title,
    description: req.body.description,
    createdAt: moment().toDate(),
    done: false,
    parentId: req.body.parentId,
  };

  //add Item to List
  const updatedItems = [...items, newItem];

  //write Items
  writeItems(updatedItems);

  return res.status(200).send(newItem);
}
