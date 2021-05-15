import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Link,
} from '@material-ui/core';
import React, { FC, useState } from 'react';
import { useApiStatus } from '../../contexts/apiStatus';

export const AboutDialog: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const apiStatus = useApiStatus();

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>About</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>About</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {/* Version */}
            <Grid item xs={6}>
              <strong>API Version</strong>
            </Grid>
            <Grid item xs={6}>
              {apiStatus.version}
            </Grid>

            {/* Author */}
            <Grid item xs={6}>
              <strong>Author</strong>
            </Grid>
            <Grid item xs={6}>
              {apiStatus.author.url ? (
                <Link href={apiStatus.author.url} rel="noreferrer" color="secondary">
                  {apiStatus.author.name}
                </Link>
              ) : (
                apiStatus.author.name
              )}
            </Grid>

            {/* Support */}
            {apiStatus.author.email && (
              <>
                <Grid item xs={6}>
                  <strong>Support</strong>
                </Grid>
                <Grid item xs={6}>
                  <Link href={`mailto:${apiStatus.author.email}`} color="secondary">
                    {apiStatus.author.email}
                  </Link>
                </Grid>
              </>
            )}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
