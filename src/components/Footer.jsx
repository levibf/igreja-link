import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { Stack } from '@mui/material';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // gap: { xs: 4, sm: 8 },
        py: { xs: 1, sm: 2 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
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
            href="https://youtube.com/admontesetv"
            aria-label="YouTube"
            sx={{ alignSelf: 'center' }}
            target='_blank'
            title='Youtube'
          >
            <FaYoutube />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/admontese_oficial"
            aria-label="Instagram"
            sx={{ alignSelf: 'center' }}
            target='_blank'
            title='Instagram'
          >
            <FaInstagram />
          </IconButton>
          <IconButton
            href="https://www.facebook.com/admonteseoficial"
            aria-label="Facebook"
            sx={{ alignSelf: 'center' }}
            target='_blank'
            title='Facebook'
          >
            <FaFacebook />
          </IconButton>
          <IconButton
            href="https://api.whatsapp.com/send/?phone=558582139659"
            aria-label="WhatsApp"
            sx={{ alignSelf: 'center' }}
            target='_blank'
            title='Whatsapp'
          >
            <FaWhatsapp />
          </IconButton>
        </Stack>
      </Box>
        <Stack>
          ASSEMBLEIA DE DEUS MINISTÉRIO MONTESE
          RUA 15 DE NOVEMBRO, 957 - MONTESE - FORTALEZA/CE
        </Stack>
    </Container>
  );
}
