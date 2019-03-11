import React, {Component} from 'react';

/* Module */
import {Link} from 'react-router-dom';
import axios from 'axios';

/* Redux */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeCurrentPage} from '../../Store/actions';

class SignUp extends Component {
    
    componentWillMount() {
        this.props.changeCurrentPage('auth');
        document.title = "Bobr: Регистрация";
    }

    render() {
        return (
            <div className="auth_container auth_signup">
                <aside className="auth_form">
                    <Link to="/" className="auth_back">На главную</Link>
                    <h4 className="auth_title">Регистрация</h4>
                    <aside className="auth_box">
                        <label>E-mail</label>
                        <input type="text"/>
                    </aside>
                    <aside className="auth_box">
                        <label>Никнейм</label>
                        <input type="text"/>
                    </aside>
                    <aside className="auth_box">
                        <label>Пароль</label>
                        <input type="password"/>
                    </aside>
                    <aside className="auth_box">
                        <label>Повторите пароль</label>
                        <input type="password"/>
                    </aside>
                    <button className="blue_button auth_btn">Зарегистрироваться</button>
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