import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import {List, ListItemButton, ListItemText} from '@mui/material';
import ClearButton from './Button';

interface ResultProps {
  content: number | string;
  history: string[];
  onClear: () => void;
  onReuse: (entry: string) => void;
}

export const Results: React.FC<ResultProps> = ({
  content,
  history,
  onClear,
  onReuse,
}) => (
  <Card data-testid="results" sx={{height: '100%'}}>
    <CardContent>
      <Typography variant="h6" gutterBottom sx={{fontWeight: 700}}>
        Results
      </Typography>
      {typeof content === 'string' && (
        <Typography variant="body1" color={content === 'Wrong input!' ? 'error' : 'primary'}>
          {content}
        </Typography>
      )}
      {history.length === 0 && content === '' && (
        <Typography variant="body2" color="text.secondary" sx={{mb: 2}}>
          No calculations yet. Tap the board or type an expression, then Submit
          or =.
        </Typography>
      )}
      <List
        component="ol"
        sx={{
          listStyleType: 'none',
          pl: 0,
          counterReset: 'list-counter',
          maxHeight: 360,
          overflow: 'auto',
        }}
      >
        {history?.map((item: string, index: number) => (
          <ListItemButton
            key={`${index}-${item}`}
            component="li"
            onClick={() => onReuse(item)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              pl: 4,
              borderRadius: 1,
              '&::before':
                index === 0
                  ? {}
                  : {
                      content: 'counter(list-counter) "."',
                      position: 'absolute',
                      left: 0,
                      counterIncrement: 'list-counter',
                    },
            }}
          >
            {index === 0 && (
              <SubdirectoryArrowRightIcon
                sx={{
                  position: 'absolute',
                  left: 0,
                  color: 'primary.main',
                  fontSize: '1.25rem',
                }}
              />
            )}
            <ListItemText
              primary={item}
              primaryTypographyProps={{
                fontFamily:
                  'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
                fontSize: '0.92rem',
              }}
            />
          </ListItemButton>
        ))}
      </List>
      {history.length > 0 || content ? (
        <ClearButton onClick={onClear} label="Erase Result" />
      ) : (
        ''
      )}
    </CardContent>
  </Card>
);
