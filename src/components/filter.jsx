import React, { useState } from 'react';

const Filtro = ({ onFilter }) => {
  const [selectedRegional, setSelectedRegional] = useState('');
  const [selectedSetor, setSelectedSetor] = useState('');
  const [selectedTesouraria, setSelectedTesouraria] = useState('');
  const [selectedPatrimonio, setSelectedPatrimonio] = useState('');
  const [selectedCadastro, setSelectedCadastro] = useState('');

  const handleFilterChange = () => {
    onFilter({
      regional: selectedRegional,
      setor: selectedSetor,
      tesouraria: selectedTesouraria,
      patrimonio: selectedPatrimonio,
      cadastro: selectedCadastro,
    });
  };

  return (
    <div style={styles.filtroContainer}>
      <h2 style={styles.title}>Filtro</h2>
      <div style={styles.dropdownContainer}>
        <select
          value={selectedRegional}
          onChange={(e) => setSelectedRegional(e.target.value)}
          style={styles.dropdown}
        >
          <option value="">Selecione a Regional</option>
          <option value="r01">Regional 01 - Fortaleza</option>
          <option value="r02">Regional 02 - Jardim</option>
          {/* Adicione mais opções conforme necessário */}
        </select>
        <select
          value={selectedSetor}
          onChange={(e) => setSelectedSetor(e.target.value)}
          style={styles.dropdown}
        >
          <option value="">Selecione o Setor</option>
          <option value="s01">Setor 01 - Administração</option>
          <option value="s02">Setor 02 - Finanças</option>
          {/* Adicione mais opções conforme necessário */}
        </select>
        <select
          value={selectedTesouraria}
          onChange={(e) => setSelectedTesouraria(e.target.value)}
          style={styles.dropdown}
        >
          <option value="">Selecione a Tesouraria</option>
          <option value="t01">Tesouraria 01</option>
          <option value="t02">Tesouraria 02</option>
          {/* Adicione mais opções conforme necessário */}
        </select>
        <select
          value={selectedPatrimonio}
          onChange={(e) => setSelectedPatrimonio(e.target.value)}
          style={styles.dropdown}
        >
          <option value="">Selecione o Patrimônio</option>
          <option value="p01">Patrimônio 01</option>
          <option value="p02">Patrimônio 02</option>
          {/* Adicione mais opções conforme necessário */}
        </select>
        <select
          value={selectedCadastro}
          onChange={(e) => setSelectedCadastro(e.target.value)}
          style={styles.dropdown}
        >
          <option value="">Selecione o Cadastro</option>
          <option value="c01">Cadastro 01</option>
          <option value="c02">Cadastro 02</option>
          {/* Adicione mais opções conforme necessário */}
        </select>
      </div>
      <button onClick={handleFilterChange} style={styles.filterButton}>Aplicar Filtros</button>
    </div>
  );
};

const styles = {
  filtroContainer: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  dropdownContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  dropdown: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    color: '#333',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    width: '100%',
    maxWidth: '250px',
  },
  filterButton: {
    padding: '12px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

// Adiciona efeitos de hover com estilo embutido
styles.dropdown[':hover'] = {
  borderColor: '#007bff',
};

styles.filterButton[':hover'] = {
  backgroundColor: '#0056b3',
};

export default Filtro;
