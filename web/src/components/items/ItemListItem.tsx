import { FC } from 'react';
import {
  ListItemIcon,
  ListItem,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { DeleteOutlined as DeleteIcon } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';

interface Props {}

export const ItemListItem: FC<Props> = () => {
  return (
    <ListItem button onClick={() => {}}>
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
  );
};
