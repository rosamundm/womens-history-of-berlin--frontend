import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

interface PageHeaderProps {
  title: string
}

const PageHeader: FC<PageHeaderProps> = ({ title }) => {
    return (
        <Box
          id="hero"
          sx={(theme) => ({
            width: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundImage:
              'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(270, 29.10%, 49.20%), transparent)',
            ...theme.applyStyles('dark', {
              backgroundImage:
                'radial-gradient(ellipse 80% 50% at 50% -20%,hsl(270, 100%, 50%), transparent)',
            }),
          })}
        >
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              pt: { xs: 14, sm: 20 },
              pb: { xs: 8, sm: 12 },
            }}
          >
            <Stack
              spacing={2}
              useFlexGap
              sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
            >
              <Typography
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  fontSize: { xs: 30, sm: 60 },
                  px: '2rem'
                }}
              >
                {title}
              </Typography>
            </Stack>
          </Container>      
        </Box>
    )
};

export default PageHeader;