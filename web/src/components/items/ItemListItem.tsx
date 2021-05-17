import { FC, useState, ChangeEvent } from 'react';
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
import { useItems } from '../../contexts/getItems';

interface Props {
  item: Item;
}

export const ItemListItem: FC<Props> = (props) => {
  const { item } = props;
  const items = useItems();
  const history = useHistory();
  const [done, setDone] = useState<boolean>(item.done);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const result = await items.updateDone(item.id, e.currentTarget.checked);
    if (result) setDone(!done);
  };

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
          onChange={handleChange}
        />
      </ListItemIcon>
      <ListItemText id={`${item.id}`} primary={`${item.title}`}></ListItemText>
      <ListItemSecondaryAction>
        <EditorDialog item={item} />
      </ListItemSecondaryAction>
    </ListItem>
  );
};
