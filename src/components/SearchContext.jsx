import React, { createContext, useState, useContext } from 'react';

// Cria o contexto
const SearchContext = createContext();

// Cria o provedor do contexto
export function SearchProvider({ children }) {
    const [searchText, setSearchText] = useState('');

    return (
        <SearchContext.Provider value={{ searchText, setSearchText }}>
            {children}
        </SearchContext.Provider>
    );
}

// Hook para usar o contexto
export function useSearch() {
    return useContext(SearchContext);
}
