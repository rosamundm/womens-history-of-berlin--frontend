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
              width: '100%',
              fontSize: { xs: 12, sm: 14 }
            }}
          >
            {text}
          </Typography>
      </Container>
    )
}

export default PageTextBox;

