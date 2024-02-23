import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button, MenuItem, Menu } from '@mui/material';
import Logo from '../assets/images/logo.png'
import IctLogo from  '../assets/images/ict_logo2.png';

function NavBar() {
    const my_pages = ['Solutions', 'Products', 'Pricing'];
    const my_settings = ['Profile', 'Account', 'Logout'];

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenSettingsMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseSettingsMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
            <Toolbar>
                <img src={Logo} style={{
                    width: 150,
                    height: 50,
                    marginRight: 10,
                    cursor: 'pointer',
                }} />
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                    {my_pages.map((page) => (
                        <Button
                            key={page}
                            sx={{ mx: 2, color: 'black' }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
                <Box>
                    <img
                        src={IctLogo}
                        style={{ width: 50, height: 50, cursor: 'pointer' }}
                        onClick={handleOpenSettingsMenu}
                    />
                    <Menu
                        sx={{ mt: '40px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseSettingsMenu}
                    >
                        {my_settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseSettingsMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default NavBar;
