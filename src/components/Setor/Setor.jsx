import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useSearch } from '../SearchContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import setores from '../setores';

// Componente principal de Setor
function Setor() {
  const { searchText } = useSearch();

  // Filtra as regionais com base no texto de busca
  const filteredSetores = setores.filter((setor) =>
    setor.titulo.toLowerCase().trim().normalize().includes(searchText.toLowerCase())
  );

  return (
    <Container sx={{ paddingBottom: 2.5 }}>
      {/* Espaço para compensar a altura da AppBar */}
      <Box sx={{ height: 80 }} />

      <Typography variant="h4" gutterBottom>
  Setores
</Typography>
<Grid container spacing={4}>
  {filteredSetores.map((setor, index) => (
    <Grid item key={index} xs={12} sm={6} md={4}>
      {/* Envolver o Card com o Link para tornar o card inteiro clicável */}
      <Link to={`/setores/${setor.id}`} style={{ textDecoration: 'none' }}>
        <Card sx={{ height: '100%' }}> {/* Certifique-se de que o Card ocupa toda a altura disponível */}
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" component="h2">
              {setor.titulo}
            </Typography>
            <Typography variant="body2">
              Acessar {setor.titulo}
            </Typography>
          </Box>
        </Card>
      </Link>
    </Grid>
  ))}
</Grid>

      {/* Configuração das rotas */}
      <Routes>
        {setores.map((setor) => (
          <Route
            key={setor.id}
            path={`/setores/${setor.id}`}
            element={<setorPage setor={setor} />}
          />
        ))}
      </Routes>
    </Container>
  );
}

// Componente que renderiza a página individual de cada setor
function setorPage({ setor }) {
  return (
    <Container sx={{ marginTop: 5 }}>
      <Typography variant="h4" gutterBottom>
        {setor.titulo}
      </Typography>
      {/* <img src={setor.imagem} alt={setor.titulo} style={{ width: '100%', height: 'auto' }} /> */}

      <Typography variant="h6" sx={{ marginTop: 3 }}>
        Acesse as opções:
      </Typography>

      <ul>
        {setor.opcoes.map((opcao, index) => (
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

export default Setor;