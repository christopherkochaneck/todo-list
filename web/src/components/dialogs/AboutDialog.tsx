import {
  Badge,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Link,
  IconButton,
} from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import { useApiStatus } from '../../contexts/apiStatus';
import { red, green } from '@material-ui/core/colors';
import * as Icons from '@material-ui/icons';
import { CustomBadge } from '../common/CustomBadge';

export const AboutDialog: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const apiStatus = useApiStatus();

  useEffect(() => {
    apiStatus.getStatus();

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <IconButton onClick={() => setOpen(true)} disabled={!apiStatus.status}>
        <CustomBadge loading={apiStatus.loading} status={apiStatus.status}>
          <Icons.InfoOutlined />
        </CustomBadge>
      </IconButton>

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
