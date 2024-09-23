import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Button, FormGroup, Menu, MenuItem } from '@mui/material';
import FilterComponentDetail from './FilterComponentDetail';
import regionals from './regionais'; // Supondo que o array de regionais seja importado
import setores from './setores'; // Importando os setores

const FilterComponent = () => {
  // Estados para regionais e setores selecionados
  const [selectedRegionals, setSelectedRegionals] = useState([]);
  const [selectedSetores, setSelectedSetores] = useState([]);

  // Estados para abrir e fechar os menus
  const [anchorElRegionals, setAnchorElRegionals] = useState(null);
  const [anchorElSetores, setAnchorElSetores] = useState(null);

  // Função para abrir o menu de regionais
  const handleDropdownClickRegionals = (event) => {
    setAnchorElRegionals(event.currentTarget);
  };

  // Função para fechar o menu de regionais
  const handleDropdownCloseRegionals = () => {
    setAnchorElRegionals(null);
  };

  // Função para abrir o menu de setores
  const handleDropdownClickSetores = (event) => {
    setAnchorElSetores(event.currentTarget);
  };

  // Função para fechar o menu de setores
  const handleDropdownCloseSetores = () => {
    setAnchorElSetores(null);
  };

  // Função para gerenciar a seleção de regionais
  const handleSelectionChangeRegionals = (id) => {
    setSelectedRegionals((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((regionalId) => regionalId !== id) : [...prevSelected, id]
    );
  };

  // Função para gerenciar a seleção de setores
  const handleSelectionChangeSetores = (id) => {
    setSelectedSetores((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((setorId) => setorId !== id) : [...prevSelected, id]
    );
  };

  // Filtrar regionais e setores selecionados
  const filteredRegionals = regionals.filter((regional) => selectedRegionals.includes(regional.id));
  const filteredSetores = setores.filter((setor) => selectedSetores.includes(setor.id));

  return (
    <div>
      {/* Botão e Menu Dropdown de Regionais */}
      <Button aria-controls="regionals-menu" aria-haspopup="true" onClick={handleDropdownClickRegionals}>
        Regionais
      </Button>
      <Menu
        id="regionals-menu"
        anchorEl={anchorElRegionals}
        keepMounted
        open={Boolean(anchorElRegionals)}
        onClose={handleDropdownCloseRegionals}
      >
        <FormGroup>
          {regionals.map((regional) => (
            <FormControlLabel
              key={regional.id}
              control={
                <Checkbox
                  checked={selectedRegionals.includes(regional.id)}
                  onChange={() => handleSelectionChangeRegionals(regional.id)}
                />
              }
              label={regional.titulo}
            />
          ))}
        </FormGroup>
      </Menu>

      {/* Botão e Menu Dropdown de Setores */}
      <Button aria-controls="setores-menu" aria-haspopup="true" onClick={handleDropdownClickSetores}>
        Setores
      </Button>
      <Menu
        id="setores-menu"
        anchorEl={anchorElSetores}
        keepMounted
        open={Boolean(anchorElSetores)}
        onClose={handleDropdownCloseSetores}
      >
        <FormGroup>
          {setores.map((setor) => (
            <FormControlLabel
              key={setor.id}
              control={
                <Checkbox
                  checked={selectedSetores.includes(setor.id)}
                  onChange={() => handleSelectionChangeSetores(setor.id)}
                />
              }
              label={setor.titulo}
            />
          ))}
        </FormGroup>
      </Menu>

      {/* Componente de Detalhes filtrado */}
      <FilterComponentDetail regionais={filteredRegionals} setores={filteredSetores} />
    </div>
  );
};

export default FilterComponent;
