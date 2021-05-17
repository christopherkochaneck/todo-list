import { AxiosResponse } from 'axios';
import { FC, useState } from 'react';
import { createCtx } from '.';
import { http } from '../services/http';
import { Item } from '../types/item';
import moment from 'moment';

interface AddItemData {
  title?: string;
  description?: string;
}

interface UpdateItemData {
  title?: string;
  description?: string;
  done?: boolean;
}

interface ItemContextInterface {
  loading: boolean;
  error: any;
  data: Item[];

  getItems: () => Promise<void>;
  getItem: (id: string) => Promise<Item | undefined>;
  addItem: (data: AddItemData) => Promise<boolean>;
  updateItem: (id: string, data: UpdateItemData) => Promise<boolean>;
  updateDone: (id: string, done: boolean) => Promise<boolean>;
  deleteItem: (id: string) => Promise<boolean>;
}

export const [useItems, CtxProvider] = createCtx<ItemContextInterface>();

function sortByDate(a: Item, b: Item): number {
  const dateA = moment(a.createdAt);
  const dateB = moment(b.createdAt);
  return dateA === dateB ? 0 : dateA.isBefore(dateB) ? 1 : -1;
}

export const ItemsProvider: FC = (props) => {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  const getItems = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await http.get<{}, AxiosResponse<Item[]>>('/items');
      console.log(response.data);
      setData(response.data.sort(sortByDate));
      return;
    } catch (err) {
      setData([]);
      setError(err.message);
      return;
    } finally {
      setLoading(false);
    }
  };

  const getItem = async (id: string): Promise<Item | undefined> => {
    try {
      setLoading(true);
      const response = await http.get<{}, AxiosResponse<Item>>(`/items/${id}`);
      return response.data;
    } catch (err) {
      setError(err.message);
      return undefined;
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (addData: AddItemData): Promise<boolean> => {
    try {
      setLoading(true);
      const response = await http.post<any, AxiosResponse<Item>>('/items', addData);
      setData([response.data, ...data].sort(sortByDate));
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const updateDone = async (id: string, done: boolean): Promise<boolean> => {
    try {
      setLoading(true);
      const response = await http.patch<any, AxiosResponse<Item>>(`/items/${id}`, { done });
      const updatedItems = data.filter((x) => x.id !== id);
      setData([response.data, ...updatedItems].sort(sortByDate));
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const updateItem = async (id: string, updateData: UpdateItemData): Promise<boolean> => {
    try {
      setLoading(true);
      const response = await http.patch<any, AxiosResponse<Item>>(`/items/${id}`, updateData);
      const updatedItems = data.filter((x) => x.id !== id);
      setData([response.data, ...updatedItems].sort(sortByDate));
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (id: string): Promise<boolean> => {
    try {
      setLoading(true);
      const response = await http.delete<any, AxiosResponse<Item[]>>(`/items/${id}`);
      console.log(response);
      setData(response.data.sort(sortByDate));
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const contextValue: ItemContextInterface = {
    loading,
    error,
    data,

    getItems,
    getItem,
    addItem,
    updateItem,
    updateDone,
    deleteItem,
  };
  return <CtxProvider value={contextValue}>{props.children}</CtxProvider>;
};
