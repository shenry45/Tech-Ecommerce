import React from 'react';
import { Menu, MenuItem, Button } from '@material-ui/core';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function openMenu(e) {
        setAnchorEl(e.currentTarget);
    }

    return <header>
        <div><p>Logo</p></div>
        <div>
            <Button onClick={openMenu}>Menu</Button>
        </div>
    </header>
}

export default Header;