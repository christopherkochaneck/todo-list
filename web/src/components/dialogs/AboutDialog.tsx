import React, { FC, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@material-ui/core';

export const AboutDialog: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>About</Button>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>About</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <strong>Api Version</strong>
            </Grid>
            <Grid item xs={6}>
              0.0.0
            </Grid>
            <Grid item xs={6}>
              <strong>Author</strong>
            </Grid>
            <Grid item xs={6}>
              Christopher Kochaneck
            </Grid>
            <Grid item xs={6}>
              <strong>Support</strong>
            </Grid>
            <Grid item xs={6}>
              support@123.de
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
