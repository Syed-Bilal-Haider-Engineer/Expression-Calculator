import React, {ChangeEvent, KeyboardEvent} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface ExpressionInputProps {
  value: string;
  onChange: (value: string) => void;
  handleSubmit: (expression: string) => void;
}

export const ExpressionInput: React.FC<ExpressionInputProps> = ({
  value,
  onChange,
  handleSubmit,
}) => {
  const onExpressionChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit(value.trim());
    }
  };

  return (
    <Box sx={{display: 'flex', gap: 1, alignItems: 'stretch'}}>
      <TextField
        fullWidth={true}
        label="Expression"
        value={value}
        variant="outlined"
        size="small"
        onChange={onExpressionChange}
        onKeyDown={onKeyDown}
        inputProps={{'aria-label': 'Expression'}}
        sx={{
          '& .MuiOutlinedInput-root': {
            bgcolor: 'rgba(0,0,0,0.25)',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
          },
        }}
      />
      <Button
        data-testid="button"
        color="primary"
        variant="contained"
        onClick={() => handleSubmit(value.trim())}
        sx={{flexShrink: 0, px: 2.5}}
      >
        Submit
      </Button>
    </Box>
  );
};
