import React, {Component} from 'react';
import './style.css';
import {bindActionCreators} from "redux";
import {changeCurrentPage, logout} from "../../Store/actions";

/* Module */
import {Redirect} from "react-router";

/* Redux */
import connect from "react-redux/es/connect/connect";

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            sortIndex: 0,
            sortArray: ['Ваши посты', 'Избранное'],
        }
    }

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
        console.info(user);
        const {redirect, sortArray, sortIndex} = this.state;
        if (redirect || !user._id) return <Redirect to='/'/>;
        return (
            <section>
                <div className="profile_top">
                    <img src={user.photo} alt="user_photo" className="profile_user_photo"/>
                    <button className="blue_button">Настроить профиль</button>
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
                    <aside className="profile_information">
                    </aside>
                </div>
                <button className="blue_button" onClick={() => this.authOut()}>Выход</button>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
        user: state.user,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
        logout: bindActionCreators(logout, dispatch),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);