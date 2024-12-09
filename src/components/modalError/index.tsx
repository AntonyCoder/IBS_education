import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { IErrorModalProps } from './types';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    minWidth: "300px"
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const ErrorModal: React.FC<IErrorModalProps> = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <DialogTitle
          sx={{
            margin: 0,
            padding: 2,
            fontSize: "24px",
            fontWeight: "bold"
          }}
          id="customized-dialog-title">
          Ошибка!
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon sx={{
            fontSize: "30px"
          }} />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom
            sx={{
              fontSize: "16px",
            }}>
            {message}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} sx={{
            fontSize: "16px",
          }} >
            Закрыть
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default ErrorModal;