import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { Stack } from '@mui/material'; 
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

const logoStyle = {
  width: '140px',
  height: 'auto',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="https://mui.com/">Sitemark&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
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
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Box sx={{ ml: '-15px' }}>
              <img
                src={
                  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
                }
                style={logoStyle}
                alt="logo of sitemark"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="text.secondary" href="#">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="https://youtube.com/admontesetv"
            aria-label="YouTube"
            sx={{ alignSelf: 'center' }}
          >
            <img
              src="https://ssl.gstatic.com/atari/images/sociallinks/youtube_white_28dp.png"
              alt="YouTube"
              style={{ width: '28px', height: '28px' }}
            />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.instagram.com/admontese_oficial"
            aria-label="Instagram"
            sx={{ alignSelf: 'center' }}
          >
            <img
              src="https://ssl.gstatic.com/atari/images/sociallinks/instagram_white_28dp.png"
              alt="Instagram"
              style={{ width: '28px', height: '28px' }}
            />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.facebook.com/admonteseoficial"
            aria-label="Facebook"
            sx={{ alignSelf: 'center' }}
          >
            <img
              src="https://ssl.gstatic.com/atari/images/sociallinks/facebook_white_28dp.png"
              alt="Facebook"
              style={{ width: '28px', height: '28px' }}
            />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://api.whatsapp.com/send/?phone=558582139659"
            aria-label="WhatsApp"
            sx={{ alignSelf: 'center' }}
          >
            <img
              src="https://lh6.googleusercontent.com/6kfwrmdIpFDbO5x9RkCIlrZh0EtxO_VT0pm1CXfAV3QsePsLSWmDsdentyo1tECyyg0XDzbQwkKciiE8CKacDaBS2yYke-BSN1KhoN7XzfE"
              alt="WhatsApp"
              style={{ width: '32px', height: '32px' }}
            />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
