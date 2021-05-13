import { FC } from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
export const Loading: FC = () => {
  return (
    <Backdrop open style={{ color: 'white' }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
