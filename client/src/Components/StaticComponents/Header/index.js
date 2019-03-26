import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './style.css';

/* MATERIAL */
import SearchIcon from '@material-ui/icons/Search';
import Burger from './Burger';
import UserImg from '../../../Static/img/header/user.svg';

/* Redux */
import connect from "react-redux/es/connect/connect";

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            navigation: [
                {link: "/", title: "Публикации", page: "home"},
                {link: "/publish", title: "Опубликовать", page: "publish"},
                {link: "/users", title: "Пользователи", page: "users"},
                {link: "/channels", title: "Каналы", page: "channels"},
            ]
        }
    }

    render() {
        const {navigation} = this.state;
        const {currentPage, user} = this.props;
        return (
            <section className="header">
                <div className="container">
                    <Burger navigation={navigation}/>
                    <div className="header_right">
                        <Link to="/" className="header_logo">bobr</Link>
                        <nav className="header_navigation">
                            {navigation.map((el, i) => {
                                return (
                                    <Link
                                        to={el.link}
                                        className={currentPage === el.page ? "active_page" : ""}
                                        key={i}
                                    >
                                        {el.title}
                                    </Link>
                                )
                            })}
                        </nav>
                    </div>
                    <div className="header_panel">
                        <Link to="/search">
                            <SearchIcon/>
                        </Link>
                        {!user._id ?
                            <div>
                                <Link to="/signin">
                                    <button className="sign_in_btn">Вход</button>
                                </Link>
                                <Link to="/signup">
                                    <button className="blue_button sign_up_btn">Регистрация</button>
                                </Link>
                            </div>
                            :
                            <div className="flex h_auth_user">
                                <button className="sign_in_btn">Написать</button>
                                <Link to="/profile" className="h_user_photo">
                                    <img src={user.photo} alt="userIcon"/>
                                </Link>
                            </div>
                        }
                    </div>
                    <Link to="/profile" className="header_mobile_user">
                        <img src={UserImg} alt="user"/>
                    </Link>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
        user: state.user,
    }
};

export default connect(mapStateToProps)(Header);