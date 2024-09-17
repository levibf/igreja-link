import React, { useState } from 'react';

const FilterComponent = () => {
    const data = [
        { regional: 'North', sectors: ['Sector 1', 'Sector 2'] },
        { regional: 'South', sectors: ['Sector 3', 'Sector 4'] },
        { regional: 'East', sectors: ['Sector 5', 'Sector 6'] },
        { regional: 'West', sectors: ['Sector 7', 'Sector 8'] },
    ];

    const [selectedRegionals, setSelectedRegionals] = useState([]);

    // Atualizar regionais selecionadas
    const handleRegionalChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedRegionals([...selectedRegionals, value]);
        } else {
            setSelectedRegionals(selectedRegionals.filter((regional) => regional !== value));
        }
    };

    // Filtrar regionais com base na seleção
    const filteredData = selectedRegionals.length
        ? data.filter((item) => selectedRegionals.includes(item.regional))
        : data;

    return (
        <div>
            <h2>Filtro Teste</h2>

            {/* Checkbox para cada regional */}
            {data.map((item) => (
                <div key={item.regional}>
                    <label>
                        <input
                            type="checkbox"
                            value={item.regional}
                            onChange={handleRegionalChange}
                        />
                        {item.regional}
                    </label>
                </div>
            ))}

            {/* Exibir as regionais e setores filtrados */}
            <div>
                {filteredData.map((item) => (
                    <div key={item.regional}>
                        <h3>{item.regional}</h3>
                        <ul>
                            {item.sectors.map((sector) => (
                                <li key={sector}>{sector}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterComponent;
