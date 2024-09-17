import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import RegionalDetalhes from './Regional/RegionalDetalhes';
import regionals from './regionais';  // Supondo que o array de regionais seja importado

const FilterComponent = () => {
  const [selectedRegionals, setSelectedRegionals] = useState([]);

  const handleSelectionChange = (id) => {
    setSelectedRegionals((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(regionalId => regionalId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  // Filtra as regionais selecionadas com base nos IDs
  const filteredRegionals = regionals.filter(regional => selectedRegionals.includes(regional.id));

  return (
    <div>
      {/* Cria uma lista de checkboxes para selecionar regionais */}
      <FormGroup className='Filtro'>
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

      {/* Passa as regionais filtradas para o componente RegionalDetalhes */}
      <RegionalDetalhes regionais={filteredRegionals} />
    </div>
  );
};

export default FilterComponent;
