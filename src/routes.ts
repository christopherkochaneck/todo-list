import { Router } from 'express';
import { getApiStatus } from './controllers/api/get-api-status';

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

export default api;
