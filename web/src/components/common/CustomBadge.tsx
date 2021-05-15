import { Badge, makeStyles, Theme } from '@material-ui/core';
import { amber, green, red } from '@material-ui/core/colors';
import { FC } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  badgeOnline: {
    backgroundColor: green[500],
  },
  badgeOffline: {
    backgroundColor: red[500],
  },
  badgeLoading: {
    backgroundColor: amber[500],
  },
}));

interface Props {
  loading: boolean;
  status: boolean;
}

export const CustomBadge: FC<Props> = (props) => {
  const { loading, status } = props;
  const classes = useStyles();

  return (
    <Badge
      classes={{
        badge: loading ? classes.badgeLoading : status ? classes.badgeOnline : classes.badgeOffline,
      }}
      variant="dot"
    >
      {props.children}
    </Badge>
  );
};
