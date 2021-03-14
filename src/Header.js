import React from 'react';
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import {Link} from "react-router-dom";

function Header( ) {
    return (
        <div className="header">
            <Link to="/">
                <img 
                    className="header_icon" 
                    src="https://d1.awsstatic.com/product-marketing/rds/airbnb_horizontal_lockup_web.bd87ed2c8e964eb35463744e07a1a0670177bda2.png"
                    alt=" "
                />
            </Link>
            

            <div className="header_center">
                <input type="text"/>
                <SearchIcon />
            </div>

            <div className="header_right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
