import React from 'react';
import { Menu, MenuItem, Button } from '@material-ui/core';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function openMenu(e) {
        setAnchorEl(e.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return <header>
        <div><p>Logo</p></div>
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={openMenu}>Menu</Button>
            <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>First</MenuItem>
                <MenuItem onClick={handleClose}>Second</MenuItem>
                <MenuItem onClick={handleClose}>Third</MenuItem>
            </Menu>
        </div>
    </header>
}

export default Header;