import {
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import * as Icons from '@material-ui/icons';
import moment from 'moment';
import { FC, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { LayoutWrapper } from '../components/layout/LayoutWrapper';
import { data } from '../data';
import { Item } from '../types/item';

interface QueryParams {
  id: string;
}

export const ItemDetails: FC = () => {
  const history = useHistory();
  const params = useParams<QueryParams>();
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    // find item by id
    const item: Item = data.filter((x) => x.id === params.id)[0] || null;

    // redirect back to items if item was not found
    if (!item) {
      history.push('/items');
    }

    setItem(item);
  }, [history, params.id]);
  if (!item) return null;

  const deleteButton = (
    <IconButton>
      <Tooltip title="Delete item">
        <Icons.DeleteOutlined style={{ color: red[500] }} />
      </Tooltip>
    </IconButton>
  );

  const doneIcon = <Icons.CheckOutlined htmlColor={green[500]} />;
  const notDoneIcon = <Icons.CloseOutlined htmlColor={red[500]} />;

  return (
    <LayoutWrapper title={item.title} showBackArrow actions={[deleteButton]}>
      <Container maxWidth="md">
        <Card style={{ marginTop: 24 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle1" color="textSecondary">
                  Description
                </Typography>
                <Typography variant="body1">
                  {item.description ? item.description : <i>undefined</i>}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" color="textSecondary">
                  Created at
                </Typography>
                <Typography variant="body1">
                  <span>
                    <Icons.CalendarTodayOutlined fontSize="inherit" />{' '}
                    {moment(item.createdAt).format('D. MMM YYYY')}
                  </span>
                  <br />
                  <span>
                    <Icons.ScheduleOutlined fontSize="inherit" />{' '}
                    {moment(item.createdAt).format('HH:MM')}
                  </span>
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle1" color="textSecondary">
                  Done
                </Typography>
                {item.done ? doneIcon : notDoneIcon}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </LayoutWrapper>
  );
};
