import { Container, List, IconButton } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { FC, useEffect } from 'react';
import { LayoutWrapper } from '../components/layout/LayoutWrapper';
import { history } from '../app';
import { AboutDialog } from '../components/dialogs/AboutDialog';
import { ItemListItem } from '../components/items/ItemListItem';
import { getItems } from '../contexts/getItems';
export const Home: FC = () => {
  const items = getItems();

  useEffect(() => {
    items.getItems();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addButton = (
    <IconButton onClick={() => history.push('/items/add')}>
      <AddIcon />
    </IconButton>
  );

  return (
    <LayoutWrapper actions={[addButton, <AboutDialog />]}>
      <Container maxWidth="sm" style={{ padding: 0 }}>
        <List>
          {items.data.map((item) => {
            return <ItemListItem key={item.id} item={item} />;
          })}
        </List>
      </Container>
    </LayoutWrapper>
  );
};
