'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface CalculatorDisplayProps {
  expression: string;
  result: number | string;
}

export const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({
  expression,
  result,
}) => {
  const isError = result === 'Wrong input!';
  const displayValue =
    result === '' || result === undefined ? '0' : String(result);

  return (
    <Box
      sx={{
        px: 2,
        py: 1.5,
        mb: 1.5,
        borderRadius: 2,
        bgcolor: '#070b14',
        border: '1px solid rgba(244,185,66,0.18)',
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.03)',
        minHeight: 88,
      }}
    >
      <Typography
        variant="caption"
        sx={{color: '#7d89a6', letterSpacing: 1.4, fontWeight: 600}}
      >
        EXPRESSION
      </Typography>
      <Typography
        data-testid="display-expression"
        sx={{
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
          color: '#c9d4f0',
          fontSize: {xs: '1rem', sm: '1.15rem'},
          minHeight: 28,
          wordBreak: 'break-all',
        }}
      >
        {expression || '0'}
      </Typography>
      <Typography
        data-testid="display-result"
        sx={{
          mt: 1,
          textAlign: 'right',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
          fontSize: {xs: '1.55rem', sm: '1.85rem'},
          fontWeight: 700,
          lineHeight: 1.15,
          color: isError ? '#ff6b7a' : '#f4b942',
          wordBreak: 'break-all',
        }}
      >
        {displayValue}
      </Typography>
    </Box>
  );
};
