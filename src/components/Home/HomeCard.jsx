import React from "react";
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Container } from '@mui/material';

export default function HomeCard() {
    return (
        <Box
            sx={{
                textAlign: 'center',
                padding: '2rem',
                marginTop: '4rem'
            }}
        >
            <Container maxWidth="md">
                {/* Título e Subtítulo */}
                <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                    Gestão
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                    AD Montese
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 4, color: '#9E9E9E' }}>
                    ACESSO SOMENTE PARA MEMBROS AUTORIZADOS
                </Typography>

                {/* Botões Centrais */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2rem',
                        mb: 4,

                   
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#8A2B2B',
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            padding: '1rem 2rem',
                            borderRadius: '15px',
                            boxShadow: '0px 0px 10px #9E9E9E',
                            '&:hover': {
                                backgroundColor: '#8A2B2B',
                            },
                        }}
                    >
                        ADMINISTRAÇÃO GERAL
                    </Button>
                </Box>

                {/* Botões Inferiores */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '1.5rem',
                        justifyContent: 'center',
                    }}
                >

                    <Button
                        component={Link}
                        to="/regionais"
                        variant="contained"
                        sx={{
                            backgroundColor: '#8A2B2B',
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            padding: '1rem',
                            borderRadius: '15px',
                            boxShadow: '0px 0px 10px #9E9E9E',
                            '&:hover': {
                                backgroundColor: '#8A2B2B',
                            },
                        }}
                    >
                        REGIONAIS
                    </Button>
                    <Button
                        component={Link}
                        to="/setores"
                        variant="contained"
                        sx={{
                            backgroundColor: '#8A2B2B',
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            padding: '1rem',
                            borderRadius: '15px',
                            boxShadow: '0px 0px 10px #9E9E9E',
                            '&:hover': {
                                backgroundColor: '#8A2B2B',
                            },
                        }}
                    >
                        SETORES
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#8A2B2B',
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            padding: '1rem',
                            borderRadius: '15px',
                            boxShadow: '0px 0px 10px #9E9E9E',
                            '&:hover': {
                                backgroundColor: '#8A2B2B',
                            },
                        }}
                    >
                        TUTORIAIS
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#8A2B2B',
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            padding: '1rem',
                            borderRadius: '15px',
                            boxShadow: '0px 0px 10px #9E9E9E',
                            '&:hover': {
                                backgroundColor: '#8A2B2B',
                            },
                        }}
                    >
                        DIVERSOS
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}