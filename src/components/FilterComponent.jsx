import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, Menu, MenuItem } from '@mui/material';
import RegionalDetalhes from './Regional/RegionalDetalhes';
import regionals from './regionais'; // Supondo que o array de regionais seja importado

const FilterComponent = () => {
  const [selectedRegionals, setSelectedRegionals] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSelectionChange = (id) => {
    setSelectedRegionals((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((regionalId) => regionalId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const filteredRegionals = regionals.filter((regional) => selectedRegionals.includes(regional.id));

  return (
    <div>
      {/* Dropdown com o título "Regionais" */}
      <Button aria-controls="regionals-menu" aria-haspopup="true" onClick={handleDropdownClick}>
        Regionais
      </Button>
      <Menu
        id="regionals-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleDropdownClose}
      >
        {/* Lista de checkboxes dentro do menu */}
        <FormGroup>
          {regionals.map((regional) => (
            <FormControlLabel
              key={regional.id}
              control={
                <Checkbox
                  checked={selectedRegionals.includes(regional.id)}
                  onChange={() => handleSelectionChange(regional.id)}
                />
              }
              label={regional.titulo}
            />
          ))}
        </FormGroup>
      </Menu>

      {/* Passa as regionais filtradas para o componente RegionalDetalhes */}
      <RegionalDetalhes regionais={filteredRegionals} />
    </div>
  );
};

export default FilterComponent;
