import { Container, List, IconButton } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { FC } from 'react';
import { LayoutWrapper } from '../components/layout/LayoutWrapper';
import { history } from '../app';
import { AboutDialog } from '../components/dialogs/AboutDialog';
import { ItemListItem } from '../components/items/ItemListItem';
import { data } from '../data';
export const Home: FC = () => {
  const addButton = (
    <IconButton onClick={() => history.push('/add')}>
      <AddIcon />
    </IconButton>
  );

  return (
    <LayoutWrapper actions={[addButton, <AboutDialog />]}>
      <Container maxWidth="sm" style={{ padding: 0 }}>
        <List>
          {data.map((item) => {
            return <ItemListItem key={item.id} item={item} />;
          })}
        </List>
      </Container>
    </LayoutWrapper>
  );
};
