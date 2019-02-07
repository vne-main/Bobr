import React, {Component} from 'react';
import './style.css';

/* MATERIAL */
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button/Button";

export default class Header extends Component {

    sendGet = async () => {
        const response = await fetch('/api/test');
        const body = await response.json();
        console.log(body);
    };

    render(){
        return(
            <section className="header">
                <div className="container">
                    <div className="header_right">
                        <h1 className="header_logo" onClick={() => this.sendGet()}>bobr</h1>
                        <nav className="header_navigation">
                            <a href="#" className="active_page">Публикации</a>
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