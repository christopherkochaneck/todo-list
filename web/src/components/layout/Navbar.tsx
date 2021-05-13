import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { ArrowBackRounded } from '@material-ui/icons';
import React, { FC } from 'react';
import { history } from '../../app';

interface Props {
  title?: string;
  actions?: Array<JSX.Element>;
  showBackArrow?: boolean;
}

export const Navbar: FC<Props> = (props) => {
  const { title, showBackArrow } = props;

  const backButton = (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      style={{ marginRight: 16 }}
      onClick={() => history.goBack()}
    >
      <ArrowBackRounded />
    </IconButton>
  );

  const navbarTitle = (
    <Typography
      variant="h6"
      color="inherit"
      className="indie-flower"
      style={{
        fontSize: 24,
        lineHeight: '32px',
        flexGrow: 1,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      {title || 'To Do List'}
    </Typography>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        {showBackArrow && backButton}
        {navbarTitle}
        {props.actions?.map((action, i) => (
          <React.Fragment key={i}>{action}</React.Fragment>
        ))}
      </Toolbar>
    </AppBar>
  );
};
