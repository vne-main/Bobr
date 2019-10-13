import React, { useState } from 'react';
import './style.css';

/* Icon */
import BurgerIcon from '../../../Static/img/header/burger.svg';

/* Module */
import Drawer from '@material-ui/core/Drawer/Drawer';
import { Link } from 'react-router-dom';

const HeaderContent = ({ navigation, closeCallback }) => {
  return (
    <div className="menu-item">
      <h3 className="header_logo mobile_burger_title">bobr</h3>
      <Link to="/" onClick={closeCallback}>
        Главная
      </Link>
      {navigation.map((el, i) => {
        return (
          <Link key={i} to={el.link} onClick={closeCallback}>
            {el.title}
          </Link>
        );
      })}
    </div>
  );
};

const MobileHeader = ({ navigation }) => {
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
        <HeaderContent closeCallback={() => changeOpen(false)} navigation={navigation} />
      </Drawer>
    </>
  );
};

export default MobileHeader;
