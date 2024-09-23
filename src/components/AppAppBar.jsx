import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import SearchBar from './Search/SearchBar';
import ToggleColorMode from './ToggleColorMode';
import { Menu } from '@mui/material';
import { useState } from 'react';

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);
  const [anchorElRegionais, setAnchorElRegionais] = useState(null);
  const [anchorElSetores, setAnchorElSetores] = useState(null);

  // Timer para evitar o fechamento imediato dos menus
  let closeTimer = null;

  const handleMouseEnter = (setAnchorEl) => (event) => {
    clearTimeout(closeTimer); // Cancela o fechamento quando o mouse entra
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = (setAnchorEl) => () => {
    // Adiciona um pequeno delay ao fechamento
    closeTimer = setTimeout(() => {
      setAnchorEl(null);
    }, 600); // Tempo em milissegundos
  };

  const handleMenuEnter = () => {
    clearTimeout(closeTimer); // Cancela o timer se o mouse entrar no menu
  };

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: '#d9cbbe',
          backgroundImage: 'none',
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
              // borderRadius: '999px',

              backdropFilter: 'blur(24px)',
              maxHeight: 40,


              // border: '1px solid',
              // borderColor: 'divider',
              // boxShadow:
              //   theme.palette.mode === 'light'
              //     ? `0 0 1px rgba(0, 0, 0, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
              //     : '0 0 1px rgba(0, 0, 0, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
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
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,



                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,


                    }}
                  >
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  </Box>
                  <MenuItem>
                    <Button component={Link} to="/regionais" color="inherit">Regionais</Button>
                  </MenuItem>
                  <MenuItem>
                    <Button component={Link} to="/setores" color="inherit">Setores</Button>
                  </MenuItem>
                  {/* <MenuItem>
                    <Button component={Link} to="/admin" color="inherit">Administração Geral</Button>
                  </MenuItem> */}
                  {/* <MenuItem>
                    <Button component={Link} to="/tutoriais" color="inherit">Tutoriais</Button>
                  </MenuItem> */}
                  <MenuItem>
                    <Button component={Link} to="/diversos" color="inherit">Diversos</Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              py: 0.2,
              // backgroundColor: 'white', // Define a cor de fundo
              // border: '1px solid', // Adiciona a borda
              // borderColor: 'divider', // Define a cor da borda
              // borderRadius: '2em', // Opcional: arredonda os cantos
              // boxShadow: 0,
              margin: '7px',
              maxWidth: '1000px',
              marginLeft: 10,

            }}
          >
            <Container maxWidth="lg">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                {/* Botão de Regionais com dropdown */}
                <span className='SpanColor'
                  onMouseEnter={handleMouseEnter(setAnchorElRegionais)}
                  onMouseLeave={handleMouseLeave(setAnchorElRegionais)}
                  color="black"
                >
                  Regionais
                </span>
                <Menu
                  anchorEl={anchorElRegionais}
                  open={Boolean(anchorElRegionais)}
                  onClose={handleMouseLeave(setAnchorElRegionais)}
                  MenuListProps={{
                    onMouseEnter: handleMenuEnter,
                    onMouseLeave: handleMouseLeave(setAnchorElRegionais),
                  }}
                >
                  <MenuItem component={Link} to="/regionais">
                    Todas as Regionais
                  </MenuItem>
                  <MenuItem component={Link} to="/regionais/r02">
                    Regional 2 - Jardim
                  </MenuItem>
                  <MenuItem component={Link} to="/regionais/r02">
                    Regional 2 - Jardim
                  </MenuItem>
                  <MenuItem component={Link} to="/regionais/r03">
                    Regional 3 - Tianguá
                  </MenuItem>
                  <MenuItem component={Link} to="/regionais/r04">
                    Regional 4 - Camocim
                  </MenuItem>
                  <MenuItem component={Link} to="/regionais/r05">
                    Regional 5 - Sobral
                  </MenuItem>
                  <MenuItem component={Link} to="/regionais/r06">
                    Regional 6 - Acaraú
                  </MenuItem>
                  <MenuItem component={Link} to="/regionais/r07">
                    Regional 7 - Beberibe
                  </MenuItem>
                  <MenuItem component={Link} to="/regionais/r08">
                    Regional 8 - Iguatu
                  </MenuItem>
                  <MenuItem component={Link} to="/regionais/r09">
                    Regional 9 - Quixeramobim
                  </MenuItem>
                  <MenuItem component={Link} to="/regionais/r10">
                    Regional 10 - Redenção
                  </MenuItem>
                  <MenuItem component={Link} to="/regionais/r11">
                    Regional 11 - Russas
                  </MenuItem>
                  <MenuItem component={Link} to="/regionais/r12">
                    Regional 12 - Pentecostes
                  </MenuItem>
                  <MenuItem component={Link} to="/regionais/r13">
                    Regional 13 - Independências
                  </MenuItem>
                  <MenuItem component={Link} to="/regionais/r14">
                    Regional 14 - Uruburetama
                  </MenuItem>
                  <MenuItem component={Link} to="/regionais/r15">
                    Regional 15 - Crato
                  </MenuItem>
                  <MenuItem component={Link} to="/regionais/r16">
                    Regional 16 - Morrinhos
                  </MenuItem>
                  <MenuItem component={Link} to="/regionais/r17">
                    Regional 17 - Chorozinho
                  </MenuItem>
                  <MenuItem component={Link} to="/regionais/r18">
                    Regional 18 - Paracuru
                  </MenuItem>
                  <MenuItem component={Link} to="/regionais/r19">
                    Regional 19 - Mucambo
                  </MenuItem>

                  {/* Adicione mais itens conforme necessário */}
                </Menu>

                {/* Botão de Setores com dropdown */}
                <span className='SpanColor'
                  onMouseEnter={handleMouseEnter(setAnchorElSetores)}
                  onMouseLeave={handleMouseLeave(setAnchorElSetores)}
                  color="inherit"
                >
                  Setores
                </span>
                <Menu
                  anchorEl={anchorElSetores}
                  open={Boolean(anchorElSetores)}
                  onClose={handleMouseLeave(setAnchorElSetores)}
                  MenuListProps={{
                    onMouseEnter: handleMenuEnter,
                    onMouseLeave: handleMouseLeave(setAnchorElSetores),
                  }}
                >
                  <MenuItem component={Link} to="/setores">
                    Todos os Setores
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s01">
                    Setor 01 - Sede Estadual
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s02">
                    Setor 02 - Conjunto Araturi
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s03">
                    Setor 03 - Conjunto Jereissati
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s04">
                    Setor 04 - Conjunto Ceará
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s05">
                    Setor 05 - Pajuçara
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s06">
                    Setor 06 - Barra do Ceará
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s07">
                    Setor 07 - Cidade dos Funcionários
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s08">
                    Setor 08 - Serrinha
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s09">
                    Setor 09 - Conjunto Acaracuzinho
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s10">
                    Setor 10 - Raul Barbosa
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s11">
                    Setor 11 - Sítio Bom Futuro
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s12">
                    Setor 12 - Conjunto Esperança
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s13">
                    Setor 13 - Parque Albane
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s14">
                    Setor 14 - Pacatuba
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s15">
                    Setor 15 - Tabuba
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s16">
                    Setor 16 - Jardim Iracema
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s17">
                    Setor 17 - Siqueira
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s18">
                    Setor 18 - Cidade Oeste
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s19">
                    Setor 19 - João XXIII
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s20">
                    Setor 20 - Mondubim
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s21">
                    Setor 21 - Praia do Futuro
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s22">
                    Setor 22 - Têxtil
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s23">
                    Setor 23 - Aquiraz
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s24">
                    Setor 24 - Maranguape
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s25">
                    Setor 25 - Bom Sucesso
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s26">
                    Setor 26 - Cascavel
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s27">
                    Setor 27 - Barro Preto
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s28">
                    Setor 28 - Pavuna
                  </MenuItem>
                  <MenuItem component={Link} to="/setores/s29">
                    Setor 29 - Paranguaba
                  </MenuItem>
                  {/* Adicione mais itens conforme necessário */}
                </Menu>

                {/* Botão Diversos sem dropdown */}
                <span component={Link} to="/diversos" color="inherit" className='SpanColor'>
                  Diversos
                </span>
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
