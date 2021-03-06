import {
  Alert,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
} from '@mui/material';
import { useState } from 'react';
import { MdDone } from 'react-icons/md';

const ShipOrder = ({ id, handleOrderShipping }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //for icon in chip
  const handleDelete = () => {};
  const handleClick = () => {};

  return (
    <>
      {/* order shipping button */}
      <div onClick={handleOpen}>
        <Chip
          label="ship now"
          color="info"
          variant="outlined"
          onDelete={handleDelete}
          onClick={handleClick}
          deleteIcon={<MdDone />}
        />
      </div>

      {/* order shipping popup */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Alert severity="info">Do you want to ship the order?</Alert>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ mr: 2 }}
            variant="outlined"
            color="success"
            onClick={handleClose}
          >
            No
          </Button>
          <div onClick={handleClose}>
            <Button
              variant="outlined"
              color="error"
              onClick={() => handleOrderShipping(id)}
              autoFocus
            >
              Yes
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ShipOrder;
