import React from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import regionais from '../regionais';
import { Box } from '@mui/material';
import { FaUserEdit, FaMoneyBill, FaFileAlt } from 'react-icons/fa';

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

const RegionalDetalhes = () => {
    const { id } = useParams();
    const regional = regionais.find(r => r.id === id);

    if (!regional) {
        return <div>Regional não encontrada</div>;
    }

    return (
        <Box
            sx={{
                textAlign: 'center',
                padding: '2rem',
                marginTop: '7rem'
            }}
        >
            <Typography variant="h4" gutterBottom>
                {regional.titulo}
            </Typography>

            <Grid container spacing={3}>
                {regional.opcoes.map((opcao, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <Link to={opcao.link} style={{ textDecoration: 'none' }} target="_blank">
                                <CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Box sx={(theme) => ({
                                            color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000', // Botão branco no modo noturno
                                            marginRight: 1
                                        })}>
                                            {getIconForOption(opcao.titulo)}
                                        </Box>
                                        <Typography variant="h6" sx={(theme) => ({
                                            color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000', // Botão branco no modo noturno
                                        })}>
                                            {opcao.titulo}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" style={{ color: '#1976D2' }}>Acessar</Typography>
                                </CardContent>
                            </Link>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
};

export default RegionalDetalhes;