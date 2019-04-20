import React, {Component} from 'react';
import './style.css';

/* Module */
import {Link} from 'react-router-dom';
import {Redirect} from "react-router";
import axios from 'axios';

/* Redux */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeCurrentPage} from '../../Store/Actions/actionMain';
import {getUser} from '../../Store/Actions/actionUser';

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            status: "",
            redirect: false,
        };
    }

    signIn() {
        const {login, password} = this.state;
        axios.post('/auth/signin', {
            login: login,
            password: password
        }).then(res => {
            if (res.data.status === 502) {
                this.setState({status: "Неверный никнейм или пароль"});
            } else {
                this.props.getUser(res.data);
                this.setState({
                    status: "Выполняется вход...",
                    redirect: true
                });
            }
        }).catch(err => {
            console.error(err);
            this.setState({status: "Ошибка сервера"});
        });
    }

    checkData() {
        let {login, password} = this.state;
        this.setState({status: "Пожалуйста, подождите..."});
        login = login.trim();
        password = password.trim();
        if (login === "") {
            this.setState({status: "Введите логин / e-mail"});
        } else if (password === "") {
            this.setState({status: "Введите пароль"});
        } else {
            this.signIn();
        }
    }

    componentDidMount() {
        this.props.changeCurrentPage('auth');
        document.title = "Bobr: Вход";
    }

    render() {
        const {login, password, status, redirect} = this.state;
        if (redirect) return <Redirect to='/'/>;
        return (
            <div className="auth_container auth_signin">
                <aside className="auth_form">
                    <Link to="/" className="auth_back">На главную</Link>
                    <h4 className="auth_title">Вход</h4>
                    <aside className="auth_box">
                        <label>Никнейм / E-mail</label>
                        <input type="text"
                               value={login}
                               onChange={(e) => this.setState({login: e.target.value})}
                               placeholder="..."
                               onKeyPress={(e) => e.charCode === 13 && this.checkData()}
                        />
                    </aside>
                    <aside className="auth_box">
                        <label>Пароль</label>
                        <input type="password"
                               value={password}
                               onChange={(e) => this.setState({password: e.target.value})}
                               placeholder="..."
                               onKeyPress={(e) => e.charCode === 13 && this.checkData()}
                        />
                    </aside>
                    <button className="blue_button auth_btn" onClick={() => this.checkData()}>Войти</button>
                    <p className="auth_status">{status}</p>
                </aside>
                <aside className="auth_bottom">
                    <p>Нет аккаунта? <Link to="/signup">Регистрация</Link></p>
                </aside>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
        getUser: bindActionCreators(getUser, dispatch),
    }
};

export default connect("", mapDispatchToProps)(SignIn);