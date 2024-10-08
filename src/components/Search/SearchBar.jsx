import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import regionais from '../regionais';
import setores from '../setores';

export default function SearchBar() {
  const navigate = useNavigate();
  const location = useLocation(); // Hook para acessar a rota atual
  const [inputValue, setInputValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  const allOptions = [...regionais, ...setores]; // Combine regionais e setores

  useEffect(() => {
    // Se a rota atual for a raiz do site ('/' ou '') reseta o valor do input
    if (location.pathname === '/' || location.pathname === '') {
      setInputValue('');
      setSelectedValue(null);
    }
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    const selectedItem = allOptions.find(
      (item) => item.titulo === newValue
    );

    if (selectedItem) {
      navigate(selectedItem.link);
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

      const selectedItem = allOptions.find((item) =>
        regex.test(normalizeText(item.titulo))
      );

      if (selectedItem) {
        navigate(selectedItem.link);
      }
    }
  };

  return (
    <Stack
      sx={{
        width: {
          xs: '100%',
          sm: 500,
          md: 700,
          lg: 900,
        },
        mx: -2,
      }}
    >
      <Autocomplete
        freeSolo
        id="search-bar"
        disableClearable
        value={selectedValue} // Controla o valor selecionado
        onChange={handleChange}
        onInputChange={handleInputChange}
        options={allOptions.map((item) => item.titulo)}
        groupBy={(option) => {
          const item = allOptions.find((r) => r.titulo === option);
          return item ? item.grupo : '';
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
            value={inputValue} // Controla o valor do input
          />
        )}
      />
    </Stack>
  );
}
