import { Container, Grid, Button, Box, TextField } from '@material-ui/core';
import { FC, FormEvent, useState } from 'react';
import { LayoutWrapper } from '../components/layout/LayoutWrapper';

export const AddItem: FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDiscription] = useState<string>('');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');

    //TODO Send Data to Backend

    //TODO If Success => history.push('/items')
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
                autoFocus
                fullWidth
                variant="outlined"
                color="secondary"
                label="Item Description"
                placeholder="Item Description"
                required
                value={description}
                onChange={(e) => setDiscription(e.currentTarget.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Button variant="outlined" onClick={() => {}}>
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
