import { Router } from 'express';
import { getApiStatus } from './controllers/api/get-api-status';
import { addItem } from './controllers/items/add-item-by-id';
import { deleteItemByID } from './controllers/items/delete-item-by-id';
import { getItemByID } from './controllers/items/get-item-by-id';
import { getItems } from './controllers/items/get-items';
import { updateItem } from './controllers/items/update-item-by.id';
const api = Router();

/**
 * GET /api get API Status
 *
 * GET /api/items -> get all items
 * POST /api/items -> add item
 * PATCH /api/items/:id -> edit item
 * DELETE /api/items/:id -> remove Item
 */

api.get('/', getApiStatus);
api.get('/items', getItems);
api.get('/items/:id', getItemByID);
api.post('/items', addItem);
api.patch('/items/:id', updateItem);
api.delete('/items/:id', deleteItemByID);
export default api;
