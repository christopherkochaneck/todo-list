import {
  Container,
  ListItemIcon,
  List,
  ListItem,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { DeleteOutlined as DeleteIcon, Add as AddIcon } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';
import { FC } from 'react';
import { LayoutWrapper } from '../components/layout/LayoutWrapper';

export const Home: FC = () => {
  const addButton = (
    <IconButton>
      <AddIcon />
    </IconButton>
  );
  return (
    <LayoutWrapper actions={[addButton]}>
      <Container maxWidth="sm" style={{ padding: 0 }}>
        <List>
          <ListItem>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={false}
                tabIndex={-1}
                inputProps={{ 'aria-labelledby': 'ITEM-X' }}
              />
            </ListItemIcon>
            <ListItemText id="ITEM-X" primary={'TITLE'}></ListItemText>
            <ListItemSecondaryAction>
              <IconButton>
                <DeleteIcon style={{ color: red[500] }} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Container>
    </LayoutWrapper>
  );
};
