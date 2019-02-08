import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './style.css';

/* MATERIAL */
import SearchIcon from '@material-ui/icons/Search';

export default class Header extends Component {

    render(){
        return(
            <section className="header">
                <div className="container">
                    <div className="header_right">
                        <Link to="/" className="header_logo">bobr</Link>
                        <nav className="header_navigation">
                            <Link to="/" className="active_page">Публикации</Link>
                            <a href="#">Пользователи</a>
                            <a href="#">Пост</a>
                        </nav>
                    </div>
                    <div className="header_panel">
                        <SearchIcon />
                        <button className="sign_in_btn">Войти</button>
                        <button className="sign_up_btn">Регистрация</button>
                    </div>
                </div>
            </section>
        )
    }
}