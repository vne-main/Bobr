import React, {Component, useState} from 'react'
import './style.css';

/* Icon */
import BurgerIcon from '../../../../Static/img/header/burger.svg';

/* Module */
import Drawer from "@material-ui/core/Drawer/Drawer";
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

class MenuContent extends Component {

    render() {
        const {navigation, closeCallback} = this.props;
        return (
            <div className="menu-item">
                <h3 className="header_logo mobile_burger_title">bobr</h3>
                <Link to="/search" onClick={closeCallback}>
                    <div className="burger_search">
                        <span>Поиск</span>
                        <SearchIcon/>
                    </div>
                </Link>
                {navigation.map((el, i) => {
                    return (
                        <Link
                            key={i}
                            to={el.link}
                            onClick={closeCallback}
                        >
                            {el.title}
                        </Link>
                    )
                })}
            </div>
        )
    }
}

const MobileHeader = ({navigation}) => {
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
                anchor="left"
            >
                <MenuContent
                    closeCallback={() => changeOpen(false)}
                    navigation={navigation}
                />
            </Drawer>
        </>
    )
};

export default MobileHeader;