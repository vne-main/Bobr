import React, {Component} from 'react';
import './style.css';

/* Module */
import {Redirect} from "react-router";

/* Redux */
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {logout} from "../../Store/Actions/actionUser";
import {changeCurrentPage} from "../../Store/Actions/actionMain";

class Profile extends Component {

    state = {
        redirect: false,
        sortIndex: 0,
        sortArray: ['Ваши посты', 'Избранное'],
    };

    authOut() {
        this.props.logout();
        this.setState({redirect: true})
    }

    changeTab(index) {
        this.setState({sortIndex: index});
    }

    componentDidMount() {
        this.props.changeCurrentPage('profile');
    }

    render() {
        const {user} = this.props;
        const {redirect, sortArray, sortIndex} = this.state;
        if (redirect || !user._id) return <Redirect to='/'/>;
        return (
            <section>
                <div className="profile_top">
                    <img src={user.photo} alt="user_photo" className="profile_user_photo"/>
                    <div className="profile_btn_panel">
                        <button className="blue_button">Настроить профиль</button>
                        <button className="blue_button" onClick={() => this.authOut()}>Выход</button>
                    </div>
                </div>
                <div>
                    <h3 className="profile_login">@{user.login}</h3>
                    <p>Пользователь</p>
                </div>
                <div className="profile_content">
                    <aside className="profile_posts tab_panel">
                        {sortArray.map((el, i) => {
                            return (
                                <span
                                    key={i}
                                    onClick={() => this.changeTab(i)}
                                    className={sortIndex === i ? "tab_panel_active" : ""}>
                                {el}
                            </span>
                            )
                        })}
                    </aside>
                    <aside className="right_column_box profile_information">
                        <h3>Информация</h3>
                        <ol className="profile_user_info">
                            <li>
                                <span>Зарегистрирован</span>
                                <span>{user.dateRegistration.split('T')[0]}</span>
                            </li>
                            <li>
                                <span>Почта</span>
                                <span>{user.email}</span>
                            </li>
                            <li>
                                <span>Пол</span>
                                <span>{user.gender}</span>
                            </li>
                            <li>
                                <span>Рейтинг</span>
                                <span>{user.rating}</span>
                            </li>
                            <li>
                                <span>Читателей</span>
                                <span>{user.subscribe.length}</span>
                            </li>
                            <li>
                                <span>Подписок</span>
                                <span>{user.following.length}</span>
                            </li>
                        </ol>
                    </aside>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.main.currentPage,
        user: state.user.user,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
        logout: bindActionCreators(logout, dispatch),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);