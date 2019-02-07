import React, {Component} from 'react';
import './style.css';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <section className="footer_information">
                    <div className="container">
                        <div className="footer_column">
                            <h3>Аккаунт</h3>
                            <ol>
                                <li>Войти</li>
                                <li>Регистрация</li>
                            </ol>
                        </div>

                        <div className="footer_column">
                            <h3>Разделы</h3>
                            <ol>
                                <li>Публикации</li>
                                <li>Хабры</li>
                                <li>Компании</li>
                                <li>Пользователи</li>
                            </ol>
                        </div>

                        <div className="footer_column">
                            <h3>Информация</h3>
                            <ol>
                                <li>Правила</li>
                                <li>Помощь</li>
                                <li>Документация</li>
                            </ol>
                        </div>

                        <div className="footer_column">
                            <h3>Реклама</h3>
                            <ol>
                                <li>Реклама</li>
                                <li>Контент</li>
                                <li>Тарифы</li>
                            </ol>
                        </div>
                    </div>
                </section>
                <section className="footer_bottom">
                    <div className="container">
                        <p>© 2019 by Kolyan</p>
                        <span>Настройки языка</span>
                        <span>О сайте</span>
                        <span>Служба поддержки</span>
                        <span>Мобильная версия</span>
                    </div>
                </section>
            </footer>
        )
    }
}