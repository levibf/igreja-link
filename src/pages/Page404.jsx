import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

function NotFound() {
    const navigate = useNavigate();

    // Redireciona automaticamente após 5 segundos
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <Container sx={{ textAlign: 'center', marginTop: 10 }}>
            <Typography variant="h2" gutterBottom>
                404
            </Typography>
            <Typography variant="h5" gutterBottom>
                Página não encontrada
            </Typography>
            <Typography variant="body1" gutterBottom>
                Redirecionando para a página inicial em 5 segundos...
            </Typography>
            <Box sx={{ marginTop: 4 }}>
                <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                    Voltar para a Página Inicial
                </Button>
            </Box>
        </Container>
    );
}

export default NotFound;