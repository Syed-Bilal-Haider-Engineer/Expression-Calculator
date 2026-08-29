import React from 'react';
import {Button} from '@mui/material';

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const ActionButton: React.FC<ButtonProps> = ({onClick, label}) => {
  return (
    <Button variant="outlined" color="error" onClick={onClick} sx={{mt: 1, mb: 1}}>
      {label}
    </Button>
  );
};

export default ActionButton;
