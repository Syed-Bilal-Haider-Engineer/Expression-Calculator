'use client';

import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';

export const AppHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: 'transparent',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <Toolbar>
          <Box sx={{flexGrow: 1}}>
            <Typography sx={{fontWeight: 700, letterSpacing: 0.2}}>
              Inline Calculator
            </Typography>
            <Typography variant="caption" sx={{color: 'text.secondary'}}>
              Custom regex engine · no eval()
            </Typography>
          </Box>
          <IconButton
            aria-label="How this calculator works"
            onClick={() => setOpen(true)}
            color="inherit"
          >
            <HelpIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>How it works</DialogTitle>
        <DialogContent>
          <Typography paragraph>
            Type an expression or tap the keypad. Both paths use the same parser
            — a regex validator plus a tokenizer. JavaScript <code>eval()</code> is
            never used.
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Supported
          </Typography>
          <Typography paragraph>
            Numbers, decimals, parentheses, and operators{' '}
            <code>+ − × ÷ %</code>. Enter or <code>=</code> evaluates. AC clears
            the current expression. Click a history row to load it back.
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Rejected by the engine
          </Typography>
          <Typography>
            Consecutive operators, trailing operators, unbalanced parentheses,
            and implied multiplication like <code>2(3+4)</code>. Use{' '}
            <code>2*(3+4)</code> instead.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
