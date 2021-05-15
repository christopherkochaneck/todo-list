import { FC } from 'react';
import { createCtx } from '.';

interface ApiStatusContextInterface {
  status: boolean;
  name: string;
  description: string;
  author: { name: string; email?: string; url?: string };
  version: string;
}

export const [useApiStatus, CtxProvider] = createCtx<ApiStatusContextInterface>();

export const ApiStatusProvider: FC = (props) => {
  const contextValue: ApiStatusContextInterface = {
    name: 'API Name',
    description: 'API Descripton',
    status: true,
    version: 'API Version',
    author: {
      name: 'Author Name',
      email: 'author@email.com',
      url: 'https://author.com',
    },
  };

  return <CtxProvider value={contextValue}>{props.children}</CtxProvider>;
};
