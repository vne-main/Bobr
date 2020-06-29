import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default () => {
  return (
    <footer>
      <section className="footer_information">
        <div className="container">
          <div className="footer_half">
            <div className="footer_column">
              <h3>Аккаунт</h3>
              <Link to="signin">Войти</Link>
              <Link to="signup">Регистрация</Link>
            </div>
            <div className="footer_column">
              <h3>Разделы</h3>
              <Link to="/">Главная</Link>
              <Link to="/publish">Опубликовать</Link>
              <Link to="/users">Пользователи</Link>
              <Link to="/chat">Чат</Link>
            </div>
          </div>
          <div className="footer_half">
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
        </div>
      </section>
      <section className="footer_bottom">
        <div className="container">
          <p>© 2019 by Nikolay</p>
          <span>Настройки языка</span>
          <span>О сайте</span>
          <span>Служба поддержки</span>
          <span>Мобильная версия</span>
        </div>
      </section>
    </footer>
  );
};
