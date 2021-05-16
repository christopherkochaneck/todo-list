import { AxiosResponse } from 'axios';
import { FC, useState } from 'react';
import { createCtx } from '.';
import { http } from '../services/http';

interface ApiStatusContextInterface {
  loading: boolean;
  status: boolean;
  name: string;
  description: string;
  author: { name: string; email?: string; url?: string };
  version: string;
  getStatus: () => Promise<void>;
}

export const [useApiStatus, CtxProvider] = createCtx<ApiStatusContextInterface>();

export const ApiStatusProvider: FC = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<boolean>(false);
  const [version, setVersion] = useState<string>('');
  const [authorName, setAuthorName] = useState<string>('');
  const [authorEmail, setAuthorEmail] = useState<string | undefined>('');
  const [authorURL, setAuthorURL] = useState<string | undefined>('');

  const getStatus = async () => {
    try {
      setLoading(true);
      type ResponseType = {
        api: string;
        name: string;
        description: string;
        author: { name: string; email?: string; url?: string };
        version: string;
      };
      //make http request
      const response = await http.get<{}, AxiosResponse<ResponseType>>('/');
      const data = response.data;
      console.log(data);
      setName(data.name);
      setDescription(data.description);
      setStatus(data.api === 'online');
      setVersion(data.version);
      setAuthorName(data.author.name);
      setAuthorEmail(data.author.email);
      setAuthorURL(data.author.url);

      return;
    } catch (err) {
      setStatus(false);
      setName('');
      setDescription('');
      setVersion('');
      setAuthorName('');
      setAuthorEmail('');
      setAuthorURL('');
      return;
    } finally {
      setLoading(false);
    }
  };
  const contextValue: ApiStatusContextInterface = {
    loading,
    name,
    description,
    status,
    version,
    author: {
      name: authorName,
      email: authorEmail,
      url: authorURL,
    },
    getStatus,
  };

  return <CtxProvider value={contextValue}>{props.children}</CtxProvider>;
};
