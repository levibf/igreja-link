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
    <Stack sx={{ width: 900 }}>
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
