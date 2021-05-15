import { FC, useState } from 'react';
import {
  ListItemIcon,
  ListItem,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { Item } from '../../types/item';
import { useHistory } from 'react-router';
import { EditorDialog } from '../dialogs/EditorDialog';

interface Props {
  item: Item;
}

export const ItemListItem: FC<Props> = (props) => {
  const history = useHistory();
  const [done, setDone] = useState<boolean>(false);

  const { item } = props;

  return (
    <ListItem
      button
      onClick={() => {
        history.push(`/items/details/${item.id}`);
      }}
    >
      <ListItemIcon
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Checkbox
          edge="start"
          tabIndex={-1}
          inputProps={{ 'aria-labelledby': 'ITEM-X' }}
          checked={done}
          onChange={(e) => {
            setDone(e.currentTarget.checked);
          }}
        />
      </ListItemIcon>
      <ListItemText id={`${item.id}`} primary={`${item.title}`}></ListItemText>
      <ListItemSecondaryAction>
        <EditorDialog item={item} />
      </ListItemSecondaryAction>
    </ListItem>
  );
};
