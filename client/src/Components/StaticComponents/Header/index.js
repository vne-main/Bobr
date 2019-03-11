import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './style.css';

/* MATERIAL */
import SearchIcon from '@material-ui/icons/Search';
import Burger from './Burger';
import connect from "react-redux/es/connect/connect";
import UserImg from '../../../Static/img/header/user.svg';

class Header extends Component {

    render() {
        const {currentPage} = this.props;
        return (
            <section className="header">
                <div className="container">
                    <Burger/>
                    <div className="header_right">
                        <Link to="/" className="header_logo">bobr</Link>
                        <nav className="header_navigation">
                            <Link to="/"
                                  className={currentPage === "home" ? "active_page" : ""}>
                                  Публикации
                            </Link>
                            <Link to="/publish"
                                  className={currentPage === "publish" ? "active_page" : ""}>
                                Опубликовать
                            </Link>
                            <Link to="/users"
                                  className={currentPage === "users" ? "active_page" : ""}>
                                Пользователи
                            </Link>
                        </nav>
                    </div>
                    <div className="header_panel">
                        <SearchIcon/>
                        <Link to="/signin">
                            <button className="sign_in_btn">Вход</button>
                        </Link>
                        <Link to="/signup">
                            <button className="blue_button sign_up_btn">Регистрация</button>
                        </Link>
                    </div>
                    <div className="header_mobile_user">
                        <img src={UserImg} alt="user"/>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
    }
};

export default connect(mapStateToProps)(Header);