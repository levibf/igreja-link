import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import regionais from '../regionais';

const SearchResults = ({ searchText }) => {

    const filteredResults = regionais.filter((regional) =>
        regional.titulo.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <Box sx={{ width: '900px', color: 'black', paddingTop: 5 }}>
            {filteredResults.length > 0 ? (
                filteredResults.map((regional) => (
                    <Typography key={regional.id} variant="body1">
                        {regional.titulo}
                    </Typography>
                ))
            ) : (
                <Typography variant="body2" color="textSecondary">
                    Nenhum resultado encontrado.
                </Typography>
            )}
        </Box>
    );
};

export default SearchResults;

// App bar reservar
// const SearchBarr = () => {
//     const { searchText, setSearchText } = useSearch();
  
//     return (
//       <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', alignItems: 'center' }}>
//         <TextField
//           sx={{ width: "900px", position: 'relative' }}
//           id="search"
//           hiddenLabel
//           size="small"
//           variant="outlined"
//           placeholder="Pesquisar..."
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           inputProps={{
//             autoComplete: 'off',
//             'aria-label': 'Pesquisar...',
//           }}
//         />
//         {searchText && <SearchResults searchText={searchText} />} {/* Renderiza os resultados */}
//       </Box>
//     );
//   };