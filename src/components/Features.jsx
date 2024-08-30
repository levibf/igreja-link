import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useSearch } from './SearchContext'; // Importa o hook do contexto
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import regionals from './regionais';

// Componente principal de Features
function Features() {
  const { searchText } = useSearch();

  // Filtra as regionais com base no texto de busca
  const filteredRegionals = regionals.filter((regional) =>
    regional.titulo.toLowerCase().trim().normalize().includes(searchText.toLowerCase())
  );

  return (
    <Container sx={{ marginBottom: 10 }}>
      {/* Espaço para compensar a altura da AppBar */}
      <Box sx={{ height: 130 }} />
      <Typography variant="h4" gutterBottom>
        Regionais
      </Typography>
      <Grid container spacing={4}>
        {filteredRegionals.map((regional, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            {/* Envolver o Card com o Link para tornar o card inteiro clicável */}
            <Link to={`/regionais/${regional.id}`} style={{ textDecoration: 'none' }}>
              <Card sx={{ height: '100%' }}> {/* Certifique-se de que o Card ocupa toda a altura disponível */}
                <Box sx={{ p: 2 }}>
                  <Typography variant="h5" component="h2">
                    {regional.titulo}
                  </Typography>
                  <Typography variant="body2">
                    Acessar sua {regional.titulo}
                  </Typography>
                </Box>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>


      {/* Configuração das rotas */}
      <Routes>
        {regionals.map((regional) => (
          <Route
            key={regional.id}
            path={`/regionais/${regional.id}`}
            element={<RegionalPage regional={regional} />}
          />
        ))}
      </Routes>
    </Container>
  );
}

// Componente que renderiza a página individual de cada regional
function RegionalPage({ regional }) {
  return (
    <Container sx={{ marginTop: 5 }}>
      <Typography variant="h4" gutterBottom>
        {regional.titulo}
      </Typography>
      {/* <img src={regional.imagem} alt={regional.titulo} style={{ width: '100%', height: 'auto' }} /> */}

      <Typography variant="h6" sx={{ marginTop: 3 }}>
        Acesse as opções:
      </Typography>

      <ul>
        {regional.opcoes.map((opcao, index) => (
          <li key={index}>
            <Typography variant="body1">
              <a href={opcao.link} target="_blank" rel="noopener noreferrer">
                {opcao.titulo}
              </a>
            </Typography>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Features;