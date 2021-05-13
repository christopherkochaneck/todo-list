import { Container, OutlinedInput, Grid, Button, Box } from '@material-ui/core';
import { FC } from 'react';
import { LayoutWrapper } from '../components/layout/LayoutWrapper';

export const AddItem: FC = () => {
  return (
    <LayoutWrapper title="Add Item" showBackArrow>
      <Container maxWidth="sm" style={{ paddingTop: 24 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <OutlinedInput fullWidth placeholder="Item Title"></OutlinedInput>
          </Grid>
          <Grid item xs={12}>
            <OutlinedInput fullWidth placeholder="Item Description"></OutlinedInput>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Button variant="outlined" onClick={() => {}}>
                Submit Item
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </LayoutWrapper>
  );
};
