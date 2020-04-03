import React from 'react';

const Header = () => {

    return <header>
        <div>
            <svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" nx="0px" y="0px" width="288px" height="288px" viewBox="0 0 288 288">
                <circle cx="51.476" cy="205.115" r="27.161" fill="#fff"/>
                <circle cx="32.353" cy="130.751" r="27.162" fill="#fff"/>
                <circle cx="148.644" cy="128.813" r="27.161" fill="#fff"/>
                <path fill="none" stroke="#ffffff" strokeWidth="21" strokeLinecap="square" strokeMiterlimit="10" d="M32.353,119.778
                    c0,0,2.221-103.672,103.672-103.672s128.91,57.566,128.91,108.795s-10.962,129.047-129.047,129.047
                    c-68.084-2.818-87.552-48.925-87.552-48.925L144,133.713"/>
            </svg>
        </div>
        <div id="menu">
            <a href="#">
                <button>Process</button>
            </a>
            <a href="#">
                <button>Services</button>
            </a>
            <a href="#">
                <button>About</button>
            </a>
            <a href="#">
                <button>Contact</button>
            </a>
        </div>
    </header>
}

export default Header;