import React, {Component} from 'react';

/* Module */
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Redirect} from "react-router";

/* Redux */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeCurrentPage} from '../../Store/actions';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            login: "",
            password: "",
            rep_password: "",
            status: "",
            redirect: false,
        };
    }

    signup() {
        const {email, login, password, rep_password} = this.state;
        this.setState({status: "Пожалуйста, подождите..."});
        if (email.trim() === "" || login.trim() === "" || password.trim() === "" || rep_password.trim() === "") {
            this.setState({status: "Введите все данные"});
            return false;
        } else if (password !== rep_password) {
            this.setState({status: "Пароли не совпадают"});
            return false;
        } else {
            axios.post('/auth/signup', {
                email: email,
                login: login,
                password: password,
            }).then(res => {
                if (res.data.status === 502) {
                    switch (res.data.value) {
                        case 'email':
                            this.setState({status: "E-mail занят"});
                            break;
                        case 'login':
                            this.setState({status: "Login занят"});
                            break;
                        default:
                            break;
                    }
                    return false;
                } else {
                    this.setState({
                        status: "Вы зарегистрировались!",
                        rep_password: "",
                        email: "",
                        login: "",
                        password: "",
                    });
                }
                console.info(res.data);
            }).catch(err => {
                console.error(err);
            })
        }
    }

    componentWillMount() {
        this.props.changeCurrentPage('auth');
        document.title = "Bobr: Регистрация";
    }

    render() {
        const {email, login, password, rep_password, status, redirect} = this.state;
        if (redirect) return <Redirect to='/'/>;
        return (
            <div className="auth_container auth_signup">
                <aside className="auth_form">
                    <Link to="/" className="auth_back">На главную</Link>
                    <h4 className="auth_title">Регистрация</h4>
                    <aside className="auth_box">
                        <label>E-mail</label>
                        <input type="text"
                               value={email}
                               onChange={(e) => this.setState({email: e.target.value})}
                        />
                    </aside>
                    <aside className="auth_box">
                        <label>Никнейм</label>
                        <input type="text"
                               value={login}
                               onChange={(e) => this.setState({login: e.target.value})}
                        />
                    </aside>
                    <aside className="auth_box">
                        <label>Пароль</label>
                        <input type="password"
                               value={password}
                               onChange={(e) => this.setState({password: e.target.value})}
                        />
                    </aside>
                    <aside className="auth_box">
                        <label>Повторите пароль</label>
                        <input type="password"
                               value={rep_password}
                               onChange={(e) => this.setState({rep_password: e.target.value})}
                        />
                    </aside>
                    <button className="blue_button auth_btn" onClick={() => this.signup()}>Зарегистрироваться</button>
                    <p className="auth_status">{status}</p>
                </aside>
                <aside className="auth_bottom">
                    <p>Уже зарегистрированы ? <Link to="/signin">Войти</Link></p>
                </aside>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
    }
};

export default connect("", mapDispatchToProps)(SignUp);