import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import { FC, useState } from 'react';

export const ItemDetails: FC = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog open>
      <DialogTitle>Itemtitle</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sapiente maiores aut,
          quidem tenetur quis? Quam voluptatem repellat exercitationem necessitatibus vel voluptates
          dolores, nesciunt natus atque cum fugit porro nihil.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
