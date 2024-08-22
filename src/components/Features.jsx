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
    title: 'Regional 01 - Fortaleza',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt ligula et ante sollicitudin.',
  },
  {
    title: 'Regional 02 - Salvador',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt ligula et ante sollicitudin.',
  },
];

function Features() {
  const { searchText } = useSearch(); // Usa o contexto para acessar o texto de pesquisa

  const filteredRegionals = regionals.filter((regional) =>
    regional.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Regionais
      </Typography>
      <Grid container spacing={4}>
        {filteredRegionals.map((regional, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" component="h2">
                  {regional.title}
                </Typography>
                <Typography variant="body2">
                  {regional.description}
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
