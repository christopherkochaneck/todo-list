import { Container, Grid, Button, Box, TextField } from '@material-ui/core';
import { FC, FormEvent, useState } from 'react';
import { LayoutWrapper } from '../components/layout/LayoutWrapper';
import { useItems } from '../contexts/getItems';
import { useHistory } from 'react-router';

export const AddItem: FC = () => {
  const items = useItems();
  const history = useHistory();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');

    //TODO Send Data to Backend
    const result = await items.addItem({ title, description });
    console.log(result);
    //TODO If Success => history.push('/items')
    if (result) {
      history.push('/items');
    }
  };

  return (
    <LayoutWrapper title="Add Item" showBackArrow>
      <Container maxWidth="sm" style={{ paddingTop: 24 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                fullWidth
                variant="outlined"
                color="secondary"
                label="Item Title"
                placeholder="Item Title"
                required
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                color="secondary"
                label="Item Description"
                placeholder="Item Description"
                required
                value={description}
                onChange={(e) => setDescription(e.currentTarget.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Button type="submit" variant="outlined" onClick={() => {}}>
                  Submit Item
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    </LayoutWrapper>
  );
};
