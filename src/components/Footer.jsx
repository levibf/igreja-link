import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { Stack } from '@mui/material';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";

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
          <IconButton
            href="https://www.google.com/maps/place/Igreja+Evang%C3%A9lica+Assembl%C3%A9ia+de+Deus+-+Montese/@-3.7703292,-38.5544027,1125m/data=!3m2!1e3!4b1!4m6!3m5!1s0x7c74eb696052b7b:0x8d55237fcf693e58!8m2!3d-3.7703292!4d-38.5518278!16s%2Fg%2F1t_hz642?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
            aria-label="WhatsApp"
            sx={{ alignSelf: 'center' }}
            target='_blank'
            title='Localizacao'
          >
            <TiLocation />
          </IconButton>
        </Stack>
      </Box>
      {/* <Stack>
        <a style={{ textDecoration: 'none', color: 'blue' }} target='_blank' href="https://www.google.com/maps/place/Igreja+Evang%C3%A9lica+Assembl%C3%A9ia+de+Deus+-+Montese/@-3.7703292,-38.5544027,1125m/data=!3m2!1e3!4b1!4m6!3m5!1s0x7c74eb696052b7b:0x8d55237fcf693e58!8m2!3d-3.7703292!4d-38.5518278!16s%2Fg%2F1t_hz642?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D">ASSEMBLEIA DE DEUS MINISTÉRIO MONTESE
          RUA 15 DE NOVEMBRO, 957 - MONTESE - FORTALEZA/CE</a>
      </Stack> */}
    </Container>
  );
}
