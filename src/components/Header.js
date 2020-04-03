import React from 'react';
import { Button } from '@material-ui/core';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function openMenu(e) {
        setAnchorEl(e.currentTarget);
    }

    return <header>
        <div>
            <p>"From junk to new opportunities."</p>
        </div>
        <div>
            <Button>Menu</Button>
            <Button>Process</Button>
            <Button>About</Button>
            <Button>Contact</Button>
        </div>
    </header>
}

export default Header;