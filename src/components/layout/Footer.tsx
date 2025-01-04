import { FC } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Copyright: FC = () => {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      Copyright © Rosamund Mather {new Date().getFullYear()} unless stated otherwise.
    </Typography>
  );
}

const Impressum: FC = () => {
  return (
    <>
      <Link color="text.secondary" variant="body2" href="/impressum">
        Impressum (Privacy Policy & Terms of Service) — in German
      </Link>
    </>
  );
}

const Footer: FC = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
        <div>
          <Impressum />
          <Copyright />
        </div>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Link color="text.secondary" variant="body2" href="/">
            Back to map
          </Link>
          <Link color="text.secondary" variant="body2" href="/about">
            About
          </Link>
          <Link color="text.secondary" variant="body2" href="/faq">
            FAQ
          </Link>
          <Link color="text.secondary" variant="body2" href="/news">
            News
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
