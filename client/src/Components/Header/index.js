import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './style.css';

/* MATERIAL */
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button/Button";

export default class Header extends Component {

    render(){
        return(
            <section className="header">
                <div className="container">
                    <div className="header_right">
                        <Link to="/" className="header_logo">bobr</Link>
                        <nav className="header_navigation">
                            <Link to="/" className="active_page">Главная</Link>
                            <Link to={`/post/0`}>Пост</Link>
                            <a href="#">Пользователи</a>
                            <a href="#">Хабы</a>
                            <a href="#">Аккаунты</a>
                        </nav>
                    </div>
                    <div className="header_search">
                        <SearchIcon />
                        <Button
                            variant="outlined"
                            className="sign_in_btn">
                                Вход
                        </Button>
                    </div>
                </div>
            </section>
        )
    }
}