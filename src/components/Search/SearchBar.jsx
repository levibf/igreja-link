import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import regionais from '../regionais';

export default function SearchBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [inputValue, setInputValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '') {
      setInputValue('');
      setSelectedValue(null);
    }
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    const selectedRegional = regionais.find(
      (regional) => regional.titulo === newValue
    );

    if (selectedRegional) {
      navigate(selectedRegional.link);
    }
  };

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const normalizeText = (text) =>
        text
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase();

      const normalizedInput = normalizeText(inputValue);
      const regex = new RegExp(normalizedInput.split('').join('.*'), 'i');

      const selectedRegional = regionais.find((regional) =>
        regex.test(normalizeText(regional.titulo))
      );

      if (selectedRegional) {
        navigate(selectedRegional.link);
      }
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        mx: 0,
        mt: 0,
        px: 0,
        boxSizing: 'border-box',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }} // Ajusta a direção para colunar em xs e para linha em sm
        spacing={2}
        alignItems="center"
        sx={{
          width: '100%',
          flexWrap: 'wrap', // Permite que os itens se movam para a linha abaixo se não houver espaço suficiente
        }}
      >
        <Box sx={{ flexGrow: 1, minWidth: { xs: '100%', sm: '200px' } }}> {/* Define 100% da largura para xs */}
          <Autocomplete
            freeSolo
            id="search-bar"
            disableClearable
            value={selectedValue}
            onChange={handleChange}
            onInputChange={handleInputChange}
            options={regionais.map((regional) => regional.titulo)}
            groupBy={(option) => {
              const regional = regionais.find((r) => r.titulo === option);
              return regional ? regional.grupo : '';
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
                placeholder="Pesquisar..."
                onKeyDown={handleKeyDown}
                value={inputValue}
                sx={{
                  width: '100%',
                  flexGrow: 1,
                }}
              />
            )}
          />
        </Box>
        {/* Adicione outros elementos aqui, se necessário */}
      </Stack>
    </Box>
  );
}
