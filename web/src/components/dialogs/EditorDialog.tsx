import {
  Dialog,
  IconButton,
  DialogTitle,
  DialogContent,
  Grid,
  TextField,
  DialogActions,
  Button,
} from '@material-ui/core';
import { FC, FormEvent, useState } from 'react';
import * as Icons from '@material-ui/icons';
import { Item } from '../../types/item';
import { green, red } from '@material-ui/core/colors';
import { useItems } from '../../contexts/getItems';
interface Props {
  item: Item;
}

export const EditorDialog: FC<Props> = (props) => {
  const { item } = props;
  const items = useItems();
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(item.title);
  const [description, setDescription] = useState<string>(item.description || '');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await items.updateItem(item.id, { title, description });
    if (result) {
      setOpen(false);
    }
  };

  const handleReset = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetData();
  };

  const resetData = () => {
    setTitle(item.title);
    setDescription(item.description || '');
  };

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <Icons.EditRounded />
      </IconButton>

      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
          resetData();
        }}
        scroll="paper"
      >
        <DialogTitle>Edit Item</DialogTitle>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  label="Item Title"
                  placeholder="Item Title"
                  value={title}
                  onChange={(e) => setTitle(e.currentTarget.value)}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  label="Item Description"
                  placeholder="Item Description"
                  value={description}
                  onChange={(e) => setDescription(e.currentTarget.value)}
                ></TextField>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button type="reset" style={{ color: red[500] }} onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" style={{ color: green[500] }}>
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
