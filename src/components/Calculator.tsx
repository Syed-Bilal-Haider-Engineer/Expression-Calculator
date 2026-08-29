'use client';

import React, {useCallback, useRef, useState} from 'react';
import {ExpressionInput} from './ExpressionInput';
import {Results} from './Results';
import {Keypad} from './Keypad';
import {CalculatorDisplay} from './CalculatorDisplay';
import Calculation from '@/logic/calculation';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState<number | string>('');
  const [history, setHistory] = useState<string[]>([]);
  const expressionRef = useRef('');

  const setCurrentExpression = useCallback((next: string) => {
    expressionRef.current = next;
    setExpression(next);
  }, []);

  const calculateResult = useCallback((input: string) => {
    const calculationResult = new Calculation(input).calculate();
    if (calculationResult !== undefined) {
      setResult(calculationResult);
      setHistory((prev: string[]) => [`${input} = ${calculationResult}`, ...prev]);
    } else {
      setResult('Wrong input!');
    }
  }, []);

  const handleClear = useCallback(() => {
    setHistory([]);
    setResult('');
    setCurrentExpression('');
  }, [setCurrentExpression]);

  const handleKeyPress = useCallback(
    (key: string) => {
      if (key === 'AC') {
        setCurrentExpression('');
        setResult('');
        return;
      }
      if (key === 'BACKSPACE') {
        setCurrentExpression(expressionRef.current.slice(0, -1));
        return;
      }
      if (key === '=') {
        calculateResult(expressionRef.current.trim());
        return;
      }
      setCurrentExpression(expressionRef.current + key);
    },
    [calculateResult, setCurrentExpression]
  );

  const handleReuse = useCallback((entry: string) => {
    const separator = ' = ';
    const index = entry.lastIndexOf(separator);
    if (index === -1) {
      return;
    }
    setCurrentExpression(entry.slice(0, index));
    const restored = entry.slice(index + separator.length);
    const numeric = Number(restored);
    setResult(Number.isNaN(numeric) ? restored : numeric);
  }, [setCurrentExpression]);

  return (
    <Box>
      <Box
        sx={{
          mb: 2,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Box sx={{flexGrow: 1, minWidth: 220}}>
          <Typography variant="h5" sx={{fontWeight: 700}}>
            Expression Calculator
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Tap the board or type. Same regex engine either way.
          </Typography>
        </Box>
        <Chip
          size="small"
          label="No eval()"
          sx={{bgcolor: 'rgba(244,185,66,0.12)', color: '#f4b942'}}
        />
        <Chip
          size="small"
          label="Parentheses · history"
          sx={{bgcolor: 'rgba(122,162,255,0.12)', color: '#9bb4ff'}}
        />
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          <Box
            sx={{
              p: {xs: 1.25, sm: 2},
              borderRadius: 4,
              background: 'linear-gradient(180deg, #1c2438 0%, #12182a 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
            }}
          >
            <CalculatorDisplay expression={expression} result={result} />
            <Keypad onKeyPress={handleKeyPress} />
            <Box sx={{mt: 2}}>
              <ExpressionInput
                value={expression}
                onChange={setCurrentExpression}
                handleSubmit={calculateResult}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Results
            content={result}
            history={history}
            onClear={handleClear}
            onReuse={handleReuse}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
