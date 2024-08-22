import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useSearch } from './SearchContext'; // Importa o hook do contexto
import regionals from './regionais';

function Features() {
  const { searchText } = useSearch();

  const filteredRegionals = regionals.filter((regional) =>
    regional.titulo.toLowerCase().trim().normalize().includes(searchText.toLowerCase())
  );

  return (
    <Container sx={{ marginBottom: 10 }}>
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
                  {/* {regional.link} */}
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
