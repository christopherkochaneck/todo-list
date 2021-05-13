import { Router } from 'express';
import { getApiStatus } from './controllers/api/get-api-status';
import { getItemByID } from './controllers/items/get-item-by-id';
import { getItems } from './controllers/items/get-items';
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
export default api;
