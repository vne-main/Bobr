import React, { Component } from "react";

/* Const */
import { PAGES_URL } from "Const/pages";

/* Function */
import { changePage } from "Requsets/function";

/* Module */
import { Link } from "react-router-dom";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      login: "",
      password: "",
      rep_password: "",
      status: ""
    };
    changePage(PAGES_URL.signup);
  }

  signUp() {
    let { email, login, password } = this.state;
    axios
      .post("/auth/signup", {
        email: email,
        login: login,
        password: password
      })
      .then(res => {
        if (res.data.status === 502) {
          switch (res.data.value) {
            case "email":
              this.setState({ status: "E-mail занят" });
              break;
            case "login":
              this.setState({ status: "Никнейм занят" });
              break;
            default:
              this.setState({ status: "Ошибка сервера" });
              break;
          }
        } else {
          this.setState({
            status: "Вы зарегистрировались!",
            rep_password: "",
            email: "",
            login: "",
            password: ""
          });
        }
      })
      .catch(err => {
        console.error(err);
        this.setState({ status: "Ошибка сервера" });
      });
  }

  checkData() {
    let { email, login, password, rep_password } = this.state;
    this.setState({ status: "Пожалуйста, подождите..." });
    email = email.trim();
    login = login.trim();
    password = password.trim();
    if (email === "" || !this.validateEmail(email)) {
      this.setState({ status: "Введите корректный E-mail" });
    } else if (login.length <= 4) {
      this.setState({ status: "Никнейм больше 4 символов" });
    } else if (password.length <= 8) {
      this.setState({ status: "Пароль должен быть больше 8 символов" });
    } else if (password !== rep_password) {
      this.setState({ status: "Пароли не совпадают" });
    } else {
      this.signUp();
    }
  }

  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    const { email, login, password, rep_password, status } = this.state;
    return (
      <div className="auth_container auth_signup">
        <aside className="auth_form">
          <Link to="/" className="auth_back">
            На главную
          </Link>
          <h4 className="auth_title">Регистрация</h4>
          <aside className="auth_box">
            <label>E-mail</label>
            <input
              type="text"
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
              onKeyPress={e => e.charCode === 13 && this.checkData()}
            />
          </aside>
          <aside className="auth_box">
            <label>Никнейм</label>
            <input
              type="text"
              value={login}
              onChange={e => this.setState({ login: e.target.value })}
              onKeyPress={e => e.charCode === 13 && this.checkData()}
            />
          </aside>
          <aside className="auth_box">
            <label>Пароль</label>
            <input
              type="password"
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
              onKeyPress={e => e.charCode === 13 && this.checkData()}
            />
          </aside>
          <aside className="auth_box">
            <label>Повторите пароль</label>
            <input
              type="password"
              value={rep_password}
              onChange={e => this.setState({ rep_password: e.target.value })}
              onKeyPress={e => e.charCode === 13 && this.checkData()}
            />
          </aside>
          <button
            className="blue_button auth_btn"
            onClick={() => this.checkData()}
          >
            Зарегистрироваться
          </button>
          <p className="auth_status">{status}</p>
        </aside>
        <aside className="auth_bottom">
          <p>
            Уже зарегистрированы ? <Link to="/signin">Войти</Link>
          </p>
        </aside>
      </div>
    );
  }
}

export default SignUp;
