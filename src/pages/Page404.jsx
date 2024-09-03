import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

function NotFound() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5); // Começamos com 5 segundos

    useEffect(() => {
        const timeout = setTimeout(() => {
            // Redirecionar para a página inicial quando o contador chegar a 0
            if (countdown === 0) {
                navigate('/');
            } else {
                setCountdown(countdown - 1); // Diminui o contador
            }
        }, 1000); // Atualiza a cada segundo

        return () => clearTimeout(timeout);
    }, [countdown, navigate]);

    return (
        <Container sx={{ textAlign: 'center', marginTop: 20 }}>
            <Typography variant="h2" gutterBottom>
                404
            </Typography>
            <Typography variant="h5" gutterBottom>
                Página não encontrada
            </Typography>
            <Typography variant="body1" gutterBottom>
                Redirecionando para a página inicial em {countdown} segundos...
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
