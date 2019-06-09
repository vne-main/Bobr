import React, {Component, useState} from 'react'
import './style.css';

/* Icon */
import BurgerIcon from '../../../../Static/img/header/panel.svg';

/* Module */
import Drawer from "@material-ui/core/Drawer/Drawer";
import {Link} from "react-router-dom";

const MobileHeader = () => {
    const [menuOpen, changeOpen] = useState(false);
    return (
        <>
            <img
                src={BurgerIcon}
                alt="burger_header"
                className="mobile_burger"
                onClick={() => changeOpen(true)}
            />
            <Drawer
                open={menuOpen}
                onClose={() => changeOpen(false)}
                className="mobile_header"
                anchor="right"
            >
                <div className="menu-item">
                    <h3 className="header_logo mobile_burger_title">Панель</h3>
                    <Link to="/signin" onClick={() => changeOpen(false)}>
                        Выход
                    </Link>
                </div>
            </Drawer>
        </>
    )
};

export default MobileHeader;