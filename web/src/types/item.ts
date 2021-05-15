export interface Item {
  id: string;
  title: string;
  description?: string;
  done: boolean;
  parentId?: string;
  createdAt: string;
}
