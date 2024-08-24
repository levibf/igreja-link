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
    <>
      <h1>teste</h1>
      <h1>teste</h1>
    </>
    // <Router>
    //   <Container sx={{ marginBottom: 10 }}>
    //     {/* Espaço para compensar a altura da AppBar */}
    //     <Box sx={{ height: 80 }} />

    //     <Typography variant="h4" gutterBottom>
    //       Regionais
    //     </Typography>
    //     <Grid container spacing={4}>
    //       {filteredRegionals.map((regional, index) => (
    //         <Grid item key={index} xs={12} sm={6} md={4}>
    //           <Card>
    //             <Box sx={{ p: 2 }}>
    //               <Typography variant="h6" component="h2">
    //                 {regional.titulo}
    //               </Typography>
    //               <Link to={`/regionais/${regional.id}`}>
    //                 <Typography variant="body2">
    //                   Acessar {regional.titulo}
    //                 </Typography>
    //               </Link>
    //             </Box>
    //           </Card>
    //         </Grid>
    //       ))}
    //     </Grid>

    //     {/* Configuração das rotas */}
    //     <Routes>
    //       {regionals.map((regional) => (
    //         <Route
    //           key={regional.id}
    //           path={`/regionais/${regional.id}`}
    //           element={<RegionalPage regional={regional} />}
    //         />
    //       ))}
    //     </Routes>
    //   </Container>
    // </Router>
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

