import React, {Component, useState} from 'react'
import './style.css';

/* Module */
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

class MenuContent extends Component {

    render() {
        const {navigation} = this.props;
        return (
            <div className="menu-item">
                <h3 className="header_logo mobile_burger_title">bobr</h3>
                <Link
                    to="/search"
                    onClick={this.props.closeCallback}
                >
                    <div className="burger_search">
                        Поиск
                        <SearchIcon/>
                    </div>
                </Link>
                {navigation.map((el, i) => {
                    return (
                        <Link
                            key={i}
                            to={el.link}
                            onClick={this.props.closeCallback}
                        >
                            {el.title}
                        </Link>
                    )
                })}
            </div>
        )
    }
}

const Burger = ({navigation}) => {
    const [menuOpen, changeOpen] = useState(false);
    return (
        <div className="mobile_burger">
            <CheeseburgerMenu
                isOpen={menuOpen}
                closeCallback={() => changeOpen(false)}>
                <MenuContent
                    closeCallback={() => changeOpen(false)}
                    navigation={navigation}
                />
            </CheeseburgerMenu>
            <HamburgerMenu
                isOpen={menuOpen}
                menuClicked={() => changeOpen(true)}
                width={25}
                height={15}
                strokeWidth={3}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.2}
            />
        </div>
    )
};

export default Burger;
