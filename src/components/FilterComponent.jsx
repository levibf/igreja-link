import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Importando useLocation
import { Checkbox, FormControlLabel, Button, FormGroup, Menu, Box } from '@mui/material';
import FilterComponentDetail from './FilterComponentDetail';
import regionals from './regionais'; // Supondo que o array de regionais seja importado
import setores from './setores'; // Importando os setores

const FilterComponent = () => {
  const [selectedRegionals, setSelectedRegionals] = useState([]);
  const [selectedSetores, setSelectedSetores] = useState([]);
  const [anchorElRegionals, setAnchorElRegionals] = useState(null);
  const [anchorElSetores, setAnchorElSetores] = useState(null);

  const location = useLocation(); // Usando useLocation para obter a URL atual
  const isHomePage = location.pathname === '/'; // Verifica se está na página inicial

  const handleDropdownClickRegionals = (event) => {
    setAnchorElRegionals(event.currentTarget);
  };

  const handleDropdownCloseRegionals = () => {
    setAnchorElRegionals(null);
  };

  const handleDropdownClickSetores = (event) => {
    setAnchorElSetores(event.currentTarget);
  };

  const handleDropdownCloseSetores = () => {
    setAnchorElSetores(null);
  };

  const handleSelectionChangeRegionals = (id) => {
    setSelectedRegionals((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((regionalId) => regionalId !== id) : [...prevSelected, id]
    );
  };

  const handleSelectionChangeSetores = (id) => {
    setSelectedSetores((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((setorId) => setorId !== id) : [...prevSelected, id]
    );
  };

  const filteredRegionals = regionals.filter((regional) => selectedRegionals.includes(regional.id));
  const filteredSetores = setores.filter((setor) => selectedSetores.includes(setor.id));

  return (
    <Box
      sx={{
        display: isHomePage ? { xs: 'none', sm: 'flex' } : 'none', // Aplica display flex se for a home, caso contrário, display none
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
      }}
    >
      <Box
        sx={{
          padding: '20px',
          borderRadius: '12px',
          position: 'relative',
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // Transparência de 50%
          minWidth: '750px',
          maxWidth: '750px',
          zIndex: 1000,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          marginTop: '10px',
          marginBottom: '15px',
        }}
      >
        <h1 style={{ textAlign: 'center', color: '#4a4a4a', fontFamily: 'Arial, sans-serif' }}>Filtro</h1>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <Button
            aria-controls="regionals-menu"
            aria-haspopup="true"
            onClick={handleDropdownClickRegionals}
            variant="contained"
            sx={{
              backgroundColor: '#000000',
              color: '#fff',
              borderRadius: '8px',
              padding: '10px 20px',
              '&:hover': {
                backgroundColor: '#970707',
              },
            }}
          >
            Regionais
          </Button>

          <Button
            aria-controls="setores-menu"
            aria-haspopup="true"
            onClick={handleDropdownClickSetores}
            variant="contained"
            sx={{
              backgroundColor: '#000000',
              color: '#fff',
              borderRadius: '8px',
              padding: '10px 20px',
              '&:hover': {
                backgroundColor: '#970707',
              },
            }}
          >
            Setores
          </Button>
        </Box>

        <Menu
          id="regionals-menu"
          anchorEl={anchorElRegionals}
          keepMounted
          open={Boolean(anchorElRegionals)}
          onClose={handleDropdownCloseRegionals}
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: '#ffffffaa',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(8px)',
              borderRadius: '12px',
              padding: '10px',
              marginTop: '5px', // Ajuste para reduzir o espaço entre o botão e o menu
            },
          }}
        >
          <FormGroup>
            {regionals.map((regional) => (
              <FormControlLabel
                key={regional.id}
                control={
                  <Checkbox
                    checked={selectedRegionals.includes(regional.id)}
                    onChange={() => handleSelectionChangeRegionals(regional.id)}
                    sx={{
                      color: '#000000', // Cor padrão
                      '&.Mui-checked': {
                        color: '#000000', // Cor quando selecionado
                      },
                    }}
                  />
                }
                label={regional.titulo}
                sx={{
                  color: '#333',
                  '& .MuiCheckbox-root': {
                    color: '#000000',
                  },
                }}
              />
            ))}
          </FormGroup>
        </Menu>

        <Menu
          id="setores-menu"
          anchorEl={anchorElSetores}
          keepMounted
          open={Boolean(anchorElSetores)}
          onClose={handleDropdownCloseSetores}
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: '#ffffffaa',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(8px)',
              borderRadius: '12px',
              padding: '10px',
              marginTop: '5px', // Ajuste para reduzir o espaço entre o botão e o menu
            },
          }}
        >
          <FormGroup>
            {setores.map((setor) => (
              <FormControlLabel
                key={setor.id}
                control={
                  <Checkbox
                    checked={selectedSetores.includes(setor.id)}
                    onChange={() => handleSelectionChangeSetores(setor.id)}
                    sx={{
                      color: '#000000', // Cor padrão
                      '&.Mui-checked': {
                        color: '#000000', // Cor quando selecionado
                      },
                    }}
                  />
                }
                label={setor.titulo}
                sx={{
                  color: '#333',
                  '& .MuiCheckbox-root': {
                    color: '#000000',
                  },
                }}
              />
            ))}
          </FormGroup>
        </Menu>

        <Box sx={{ marginTop: '-10px' }}> {/* Margem negativa para subir os detalhes */}
          <FilterComponentDetail regionais={filteredRegionals} setores={filteredSetores} />
        </Box>
      </Box>
    </Box>
  );
};

export default FilterComponent;
