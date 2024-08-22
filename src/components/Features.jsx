import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useSearch } from './SearchContext'; // Importa o hook do contexto

const regionals = [
  {
    titulo: "Regional 01 - Fortaleza",
    link: "/admontese.com/admontesegestao/r01",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280"
  },
  {
    titulo: "Regional 02 - Jardim",
    link: "/admontese.com/admontesegestao/r02",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280"
  },
  {
    titulo: "Regional 03 - Tianguá",
    link: "/admontese.com/admontesegestao/r03",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280"
  },
  {
    titulo: "Regional 04 - Camocim",
    link: "/admontese.com/admontesegestao/r04",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280"
  },
  {
    titulo: "Regional 05 - Sobral",
    link: "/admontese.com/admontesegestao/r05",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280"
  },
  {
    titulo: "Regional 06 - Acaraú",
    link: "/admontese.com/admontesegestao/r06",
    imagem: "https://lh5.googleusercontent.com/Az20Ts7k6yUh9y-8tWuuala9TxhbRgP_SDW4rLwMtIKYJ8c7PvMYlaRESGYZSckmag732eM-JIUzIsjmZWjJaZwrX6cdKbhZE-oZ4FvlD_yS4xVPxuDIhJz_UFFgt0rzgg=w1280"
  },
  {
    titulo: "Regional 07 - Beberibe",
    link: "/admontese.com/admontesegestao/r07",
    imagem: "https://lh5.googleusercontent.com/U2h_t9fb5SiTFkrxyEHnFi6qVvsVptYwBCrDuiWVloguzT0vi5xrFYFgrSg7OUxYVwRFeHz8rC_nfc1UdkW6jy4hgeTDUCtO5vuZYPJWFb1tuR_i5cXSsMWO8DjjBewm=w1280"
  },
  {
    titulo: "Regional 08 - Iguatu",
    link: "/admontese.com/admontesegestao/r08",
    imagem: "https://lh3.googleusercontent.com/Rt65RdeVSFLA58LD6cxa7Iwyvi3vdiLB2c3_nO5y8cZIopnDJYABvuAnfQ_aRsO_J-RkNfJvo_VV0g-D8hrxQrYMovRmE2O9QkLJ3S1vH-gY9h6w6RSfo2PDNqrkgIWaTQ=w1280"
  },
  {
    titulo: "Regional 09 - Quixeramobim",
    link: "/admontese.com/admontesegestao/r09",
    imagem: "https://lh3.googleusercontent.com/Rt65RdeVSFLA58LD6cxa7Iwyvi3vdiLB2c3_nO5y8cZIopnDJYABvuAnfQ_aRsO_J-RkNfJvo_VV0g-D8hrxQrYMovRmE2O9QkLJ3S1vH-gY9h6w6RSfo2PDNqrkgIWaTQ=w1280"
  },
  {
    titulo: "Regional 10 - Redenção",
    link: "/admontese.com/admontesegestao/r10",
    imagem: "https://lh3.googleusercontent.com/Rt65RdeVSFLA58LD6cxa7Iwyvi3vdiLB2c3_nO5y8cZIopnDJYABvuAnfQ_aRsO_J-RkNfJvo_VV0g-D8hrxQrYMovRmE2O9QkLJ3S1vH-gY9h6w6RSfo2PDNqrkgIWaTQ=w1280"
  },
  {
    titulo: "Regional 11 - Russas",
    link: "/admontese.com/admontesegestao/r11",
    imagem: "https://lh3.googleusercontent.com/Rt65RdeVSFLA58LD6cxa7Iwyvi3vdiLB2c3_nO5y8cZIopnDJYABvuAnfQ_aRsO_J-RkNfJvo_VV0g-D8hrxQrYMovRmE2O9QkLJ3S1vH-gY9h6w6RSfo2PDNqrkgIWaTQ=w1280"
  },
  {
    titulo: "Regional 12 - Pentecostes",
    link: "/admontese.com/admontesegestao/r12",
    imagem: "https://lh3.googleusercontent.com/Rt65RdeVSFLA58LD6cxa7Iwyvi3vdiLB2c3_nO5y8cZIopnDJYABvuAnfQ_aRsO_J-RkNfJvo_VV0g-D8hrxQrYMovRmE2O9QkLJ3S1vH-gY9h6w6RSfo2PDNqrkgIWaTQ=w1280"
  },
  {
    titulo: "Regional 13 - Independência",
    link: "/admontese.com/admontesegestao/r13",
    imagem: "https://lh3.googleusercontent.com/Rt65RdeVSFLA58LD6cxa7Iwyvi3vdiLB2c3_nO5y8cZIopnDJYABvuAnfQ_aRsO_J-RkNfJvo_VV0g-D8hrxQrYMovRmE2O9QkLJ3S1vH-gY9h6w6RSfo2PDNqrkgIWaTQ=w1280"
  },
  {
    titulo: "Regional 14 - Uruburetama",
    link: "/admontese.com/admontesegestao/r14",
    imagem: "https://lh3.googleusercontent.com/Rt65RdeVSFLA58LD6cxa7Iwyvi3vdiLB2c3_nO5y8cZIopnDJYABvuAnfQ_aRsO_J-RkNfJvo_VV0g-D8hrxQrYMovRmE2O9QkLJ3S1vH-gY9h6w6RSfo2PDNqrkgIWaTQ=w1280"
  },
  {
    titulo: "Regional 15 - Crato",
    link: "/admontese.com/admontesegestao/r15",
    imagem: "https://lh3.googleusercontent.com/Rt65RdeVSFLA58LD6cxa7Iwyvi3vdiLB2c3_nO5y8cZIopnDJYABvuAnfQ_aRsO_J-RkNfJvo_VV0g-D8hrxQrYMovRmE2O9QkLJ3S1vH-gY9h6w6RSfo2PDNqrkgIWaTQ=w1280"
  },
  {
    titulo: "Regional 16 - Morrinhos",
    link: "/admontese.com/admontesegestao/r16",
    imagem: "https://lh3.googleusercontent.com/Rt65RdeVSFLA58LD6cxa7Iwyvi3vdiLB2c3_nO5y8cZIopnDJYABvuAnfQ_aRsO_J-RkNfJvo_VV0g-D8hrxQrYMovRmE2O9QkLJ3S1vH-gY9h6w6RSfo2PDNqrkgIWaTQ=w1280"
  },
  {
    titulo: "Regional 17 - Chorozinho",
    link: "/admontese.com/admontesegestao/r17",
    imagem: "https://lh3.googleusercontent.com/2NJwAzVFsVtdSSvs45qG29nLEQWhNXQqfsmkEXT0P84gdicDWzdpNIC0hb3AJTzk82YTfxQDB0zpN0rca53qAwYybfPpoU1P_1qoR5unhcYxHCF8UZK1kcsBC3seg_ttMQ=w1280"
  },
  {
    titulo: "Regional 18 - Paracuru",
    link: "/admontese.com/admontesegestao/r18",
    imagem: "https://lh3.googleusercontent.com/EFgFM2aJB1IinreovlECavP-1bNA3HPJacYGF6jwBESS5oWZ9GPlxvPHT_yNu5z-72IXy76zjgEhlCxTRp6dVbJKZowVsK7NQWbR-nT5ykoJkrEE22bbdLX-O3BhJhK31Q=w1280"
  },
  {
    titulo: "Regional 19 - Mucambo",
    link: "/admontese.com/admontesegestao/r19",
    imagem: "https://lh4.googleusercontent.com/KKs5benPke78J90RQnizBaCpbCgALGHSMIZa1kJjs9PugcMrRcMCXeNobWySf-n8b5canIXlA8HyfKX8Aum1_Xbbx22-8pJSHKRYi5R56WLBX_J0xmOPOs3xg-tpFxaVRA=w1280"
  }

];

function Features() {
  const { searchText } = useSearch();

  const filteredRegionals = regionals.filter((regional) =>
    regional.titulo.toLowerCase().trim().normalize().includes(searchText.toLowerCase())
  );

  return (
    <Container>
      {/* Espaço para compensar a altura da AppBar */}
      <Box sx={{ height: 80 }} />

      <Typography variant="h4" gutterBottom>
        Regionais
      </Typography>
      <Grid container spacing={4}>
        {filteredRegionals.map((regional, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" component="h2">
                  {regional.titulo}
                </Typography>
                <Typography variant="body2">
                  {regional.link}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Features;
