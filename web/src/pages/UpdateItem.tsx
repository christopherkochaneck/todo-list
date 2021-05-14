import { Grid, Container, OutlinedInput, TextField, Button } from '@material-ui/core';
import { FC } from 'react';
import { LayoutWrapper } from '../components/layout/LayoutWrapper';

export const UpdateItem: FC = () => {
  return (
    <LayoutWrapper title="Update Item" showBackArrow>
      <Container maxWidth="sm" style={{ paddingTop: 24 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <OutlinedInput fullWidth></OutlinedInput>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth variant="outlined" multiline rows={10}></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="outlined">
              Submit changes
            </Button>
          </Grid>
        </Grid>
      </Container>
    </LayoutWrapper>
  );
};
