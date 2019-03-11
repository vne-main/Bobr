import React, {Component} from 'react';
import './style.css';

/* Module */
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router'
import axios from 'axios';

/* Redux */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeCurrentPage} from '../../Store/actions';

class SignIn extends Component {

    constructor(props){
        super(props);
        this.state = {
            login: "",
            password: "",
            status: "",
            redirect: false,
        };
    }

    signin(){
        const {login, password, status} = this.state;
        this.setState({status: "Пожалуйста, подождите..."});
        if(login.trim() === "" || password.trim() === ""){
            this.setState({status: "Введите данные"});
            return false;
        } else {
            axios.post('/auth/signin', {
                login: login,
                password: password
            }).then(res => {
                console.info(res.data[0]);
                this.setState({
                    status: "Выполняется вход",
                    redirect: true
                });
            }).catch(err => {
                console.info("Error");
                this.setState({status: "Неверный логин или пароль"});
                console.error(err);
            })
        }
    }

    componentWillMount() {
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
                        <label>Логин / E-mail</label>
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
                    <button className="blue_button auth_btn" onClick={() => this.signin()}>Войти</button>
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
    }
};

export default connect("", mapDispatchToProps)(SignIn);