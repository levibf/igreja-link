import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import SearchBar from './Search/SearchBar';
import ToggleColorMode from './ToggleColorMode';

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Link to='/' style={{ paddingRight: '28px' }}>
              <IconButton aria-label="Home" sx={{ alignSelf: 'center' }} title='Home'>
                <Box
                  component="img"
                  src={logo}
                  alt="admontese"
                  sx={{
                    width: { xs: 25, md: 35 },
                    height: { xs: 20, md: 35 },
                  }}
                />
              </IconButton>
            </Link>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <SearchBar /> {/* Campo de busca com resultados */}
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            </Box>
          </Toolbar>
          <Box
            sx={{
              // bgcolor: mode === 'light' ? 'white' : 'grey.900',
              py: 0.2,
              boxShadow: 0,
            }}
          >
            <Container maxWidth="lg">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                <Button component={Link} to="/regionais" color="inherit">Regionais</Button>
                <Button component={Link} to="/setores" color="inherit">Setores</Button>
                <Button component={Link} to="/section3" color="inherit">Administração Geral</Button>
                <Button component={Link} to="/section4" color="inherit">Tutoriais</Button>
                <Button component={Link} to="/section4" color="inherit">Diversos</Button>
              </Box>
            </Container>
          </Box>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
