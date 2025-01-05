import { Container, Typography } from '@mui/material';
import { FC } from 'react';

interface PageTextBoxProps {
  text: string
}

const PageTextBox: FC<PageTextBoxProps> = ({ text }) => {
    return (
      <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // pt: { xs: 14, sm: 20 },
            // pb: { xs: 8, sm: 12 },
            pb: '3rem',
            pt: '2.5rem',
            width: '100%',
            maxWidth: '100%'
          }}
      >
          <Typography
            sx={{
              textAlign: 'left',
              color: 'text.secondary',
              // width: { sm: '100%', md: '80%' },
              width: '100%',
            }}
            variant="body1"
          >
            {text}
            {/* <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
              })}
            />
          </Typography> */}
          </Typography>
      </Container>
    )
}

export default PageTextBox;

