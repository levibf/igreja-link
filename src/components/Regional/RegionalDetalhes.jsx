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
                marginTop: '4rem'
            }}
        >
            <Typography variant="h4" gutterBottom>
                {regional.titulo}
            </Typography>

            <Grid container spacing={3}>
                {regional.opcoes.map((opcao, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Box sx={{ marginRight: 1 }}>
                                        {getIconForOption(opcao.titulo)}
                                    </Box>
                                    <Typography variant="h6">
                                        {opcao.titulo}
                                    </Typography>
                                </Box>
                                <Link to={opcao.link} style={{ textDecoration: 'none', color: 'blue' }} target="_blank">
                                    <Typography variant="body2">Ver mais</Typography>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default RegionalDetalhes;