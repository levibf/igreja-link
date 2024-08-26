import React from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import setores from '../setores';
import { Box } from '@mui/material';
import { FaUserEdit, FaMoneyBill, FaFileAlt, FaArrowRight } from 'react-icons/fa';

const getIconForOption = (titulo) => {
    switch (titulo) {
        case 'Tesouraria Setorial':
            return <FaMoneyBill />;
        case 'Controle de Membros':
            return <FaUserEdit />;
        case 'Relatório Patrimonial':
            return <FaFileAlt />;
        case 'Secretaria':
            return <FaFileAlt />;
        case 'Patrimônio':
            return <FaFileAlt />;
        default:
            return null;
    }
};

const SetorDetalhes = () => {
    const { id } = useParams();
    const setor = setores.find(r => r.id === id);

    if (!setor) {
        return <div>Setor não encontrado</div>;
    }

    return (
        <Box
            sx={{
                textAlign: 'center',
                padding: '2rem',
                marginTop: '4rem',
            }}
        >
            <Typography variant="h4" gutterBottom>
                {setor.titulo}
            </Typography>

            <Grid container spacing={3}>
                {setor.opcoes.map((opcao, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 2 }}>
                                    <Box sx={{ marginRight: 1 }}>
                                        {getIconForOption(opcao.titulo)}
                                    </Box>
                                    <Typography variant="h6">
                                        {opcao.titulo}
                                    </Typography>
                                </Box>

                                {/* Verificar se o link é um array ou uma string */}
                                {Array.isArray(opcao.link) ? (
                                    <Box>
                                        {opcao.link.map((subOpcao, subIndex) => (
                                            <Box key={subIndex} sx={{ marginBottom: 1, textAlign: 'left' }}>
                                                <Link
                                                    to={subOpcao.link}
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: '#1976d2',
                                                        fontWeight: 'bold',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                    target="_blank"
                                                >
                                                    <FaArrowRight style={{ marginRight: 8 }} />
                                                    {subOpcao.nome || subOpcao.link}
                                                </Link>
                                            </Box>
                                        ))}
                                    </Box>
                                ) : (
                                    <Link
                                        to={opcao.link}
                                        style={{
                                            textDecoration: 'none',
                                            color: '#1976d2',
                                            fontWeight: 'bold',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                        target="_blank"
                                    >
                                        <FaArrowRight style={{ marginRight: 8 }} />
                                        <Typography variant="body2">Ver mais</Typography>
                                    </Link>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default SetorDetalhes;