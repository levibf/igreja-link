import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import regionais from '../regionais';

export default function SearchBar() {
  const navigate = useNavigate(); // Hook para navegação

  const handleInputChange = (event, newValue) => {
    const selectedRegional = regionais.find(
      (regional) => regional.titulo === newValue
    );

    if (selectedRegional) {
      navigate(selectedRegional.link); // Redireciona para o link correspondente
    }
  };

  return (
    <Stack
      sx={{
        width: {
          xs: '100%', // Ocupa toda a largura em dispositivos móveis
          sm: 500, // Largura média em tablets
          md: 700, // Largura em telas médias
          lg: 900, // Largura em desktops
        },
        mx: 'auto', // Centraliza horizontalmente
        // mt: 2, // Margem superior
        // px: 2, // Padding horizontal
      }}
    >
      <Autocomplete
        freeSolo
        id="search-bar"
        disableClearable
        onInputChange={handleInputChange} // Captura a seleção do usuário
        options={regionais}
        groupBy={(option) => option.grupo}  // Agrupando por grupo
        getOptionLabel={(option) => option.titulo}  // Exibindo o título
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
            placeholder="Pesquisar..."
          />
        )}
      />
    </Stack>
  );
}
