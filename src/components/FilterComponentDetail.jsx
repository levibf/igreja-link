import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { FaUserEdit, FaMoneyBill, FaFileAlt } from 'react-icons/fa';

// Função para obter o ícone correto
const getIconForOption = (titulo) => {
    switch (titulo) {
        case 'Tesouraria Regional':
            return <FaMoneyBill />;
        case 'Controle de Membros':
            return <FaUserEdit />;
        case 'Relatório Patrimonial':
            return <FaFileAlt />;
        default:
            return null;
    }
};

// Modificação no componente para lidar com várias regionais
const FilterComponentDetail = ({ regionais, setores }) => {
    // if (!regionais || regionais.length === 0) {
    //     return <div>Nenhuma regional selecionada</div>;
    // }

    return (
        <Box
            sx={{
                textAlign: 'center',
                padding: '2rem',
            }}
        >
            {regionais.map((regional) => (
                <Box key={regional.id} sx={{ marginBottom: '2rem' }}>
                    <Typography variant="h4" gutterBottom>
                        {regional.titulo}
                    </Typography>

                    <Grid container spacing={3}>
                        {regional.opcoes && regional.opcoes.length > 0 ? (
                            regional.opcoes.map((opcao, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card>
                                        <Link to={opcao.link} style={{ textDecoration: 'none', color: 'black' }} target="_blank">
                                            <CardContent>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Box sx={{ marginRight: 1 }}>
                                                        {getIconForOption(opcao.titulo)}
                                                    </Box>
                                                    <Typography variant="h6">
                                                        {opcao.titulo}
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body2">Acessar</Typography>
                                            </CardContent>
                                        </Link>
                                    </Card>
                                </Grid>
                            ))
                        ) : (
                            <Typography variant="body2">Nenhuma opção disponível.</Typography>
                        )}
                    </Grid>
                </Box>
            ))}

            {setores.map((setor) => (
                <Box key={setor.id} sx={{ marginBottom: '2rem' }}>
                    <Typography variant="h4" gutterBottom>
                        {setor.titulo}
                    </Typography>

                    <Grid container spacing={3}>
                        {setor.opcoes && setor.opcoes.length > 0 ? (
                            setor.opcoes.map((opcao, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card>
                                        <Link to={opcao.link} style={{ textDecoration: 'none', color: 'black' }} target="_blank">
                                            <CardContent>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Box sx={{ marginRight: 1 }}>
                                                        {getIconForOption(opcao.titulo)}
                                                    </Box>
                                                    <Typography variant="h6">
                                                        {opcao.titulo}
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body2">Acessar</Typography>
                                            </CardContent>
                                        </Link>
                                    </Card>
                                </Grid>
                            ))
                        ) : (
                            <Typography variant="body2">Nenhuma opção disponível.</Typography>
                        )}
                    </Grid>
                </Box>
            ))}
        </Box>
    );
};

export default FilterComponentDetail;
