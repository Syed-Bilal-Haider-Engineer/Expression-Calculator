'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

type KeyVariant = 'num' | 'op' | 'fn' | 'eq';

interface KeyDef {
  label: string;
  value: string;
  variant: KeyVariant;
  ariaLabel?: string;
  span?: number;
}

const KEYS: KeyDef[] = [
  {label: '(', value: '(', variant: 'fn', ariaLabel: 'Open parenthesis'},
  {label: ')', value: ')', variant: 'fn', ariaLabel: 'Close parenthesis'},
  {label: '⌫', value: 'BACKSPACE', variant: 'fn', ariaLabel: 'Backspace'},
  {label: 'AC', value: 'AC', variant: 'fn', ariaLabel: 'All clear'},
  {label: '7', value: '7', variant: 'num'},
  {label: '8', value: '8', variant: 'num'},
  {label: '9', value: '9', variant: 'num'},
  {label: '÷', value: '/', variant: 'op', ariaLabel: 'Divide'},
  {label: '4', value: '4', variant: 'num'},
  {label: '5', value: '5', variant: 'num'},
  {label: '6', value: '6', variant: 'num'},
  {label: '×', value: '*', variant: 'op', ariaLabel: 'Multiply'},
  {label: '1', value: '1', variant: 'num'},
  {label: '2', value: '2', variant: 'num'},
  {label: '3', value: '3', variant: 'num'},
  {label: '−', value: '-', variant: 'op', ariaLabel: 'Subtract'},
  {label: '0', value: '0', variant: 'num'},
  {label: '.', value: '.', variant: 'num', ariaLabel: 'Decimal point'},
  {label: '%', value: '%', variant: 'op', ariaLabel: 'Modulo'},
  {label: '+', value: '+', variant: 'op', ariaLabel: 'Add'},
  {label: '=', value: '=', variant: 'eq', ariaLabel: 'Equals', span: 4},
];

const variantSx: Record<KeyVariant, object> = {
  num: {
    bgcolor: 'rgba(255,255,255,0.06)',
    color: '#f4f7ff',
    '&:hover': {bgcolor: 'rgba(255,255,255,0.12)'},
  },
  op: {
    bgcolor: 'rgba(244,185,66,0.14)',
    color: '#f4b942',
    '&:hover': {bgcolor: 'rgba(244,185,66,0.24)'},
  },
  fn: {
    bgcolor: 'rgba(122,162,255,0.12)',
    color: '#9bb4ff',
    '&:hover': {bgcolor: 'rgba(122,162,255,0.22)'},
  },
  eq: {
    bgcolor: '#f4b942',
    color: '#16120a',
    fontWeight: 700,
    '&:hover': {bgcolor: '#ffd36a'},
  },
};

interface KeypadProps {
  onKeyPress: (key: string) => void;
}

export const Keypad: React.FC<KeypadProps> = ({onKeyPress}) => (
  <Box
    role="group"
    aria-label="Calculator keypad"
    sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 1,
    }}
  >
    {KEYS.map((key) => (
      <Button
        key={`${key.value}-${key.label}`}
        type="button"
        onClick={() => onKeyPress(key.value)}
        aria-label={key.ariaLabel || key.label}
        sx={{
          minHeight: {xs: 44, sm: 48},
          gridColumn: key.span ? `span ${key.span}` : undefined,
          fontSize: key.variant === 'eq' ? '1.35rem' : '1.15rem',
          fontWeight: 600,
          borderRadius: 2,
          textTransform: 'none',
          boxShadow: 'none',
          ...variantSx[key.variant],
        }}
      >
        {key.label}
      </Button>
    ))}
  </Box>
);
