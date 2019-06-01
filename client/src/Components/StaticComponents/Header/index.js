import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './style.css';

/* Component */
import IconPanel from './IconPanel';

/* MATERIAL */
import Burger from './Burger';
import UserImg from '../../../Static/img/header/user.svg';

/* Redux */
import connect from "react-redux/es/connect/connect";

class Header extends Component {

    state = {
        navigation: [
            {link: "/publish", title: "Опубликовать", page: "publish"},
            {link: "/users", title: "Пользователи", page: "users"},
            // {link: "/chat", title: "Чат", page: "chat"},
            {link: "/different", title: "В разработке", page: "different"},
        ],
    };

    render() {
        const {navigation} = this.state;
        const {currentPage, user, windowWidth} = this.props;
        return (
            <section className="header">
                <div className="container">
                    {windowWidth <= 800 ?
                        <>
                            <Burger navigation={navigation}/>
                            <Link to="/" className="header_logo">bobr</Link>
                        </>
                        :
                        <>
                            <div className="header_right">
                                <Link to="/" className="header_logo">bobr</Link>
                                <nav className="header_navigation">
                                    {navigation.map((el, i) => {
                                        return (
                                            <Link
                                                to={el.link}
                                                className={currentPage === el.page ? "active_page" : ""}
                                                key={i}
                                            >
                                                {el.title}
                                            </Link>
                                        )
                                    })}
                                </nav>
                            </div>
                            <IconPanel user={user}/>
                        </>
                    }


                    {!user._id ?
                        <Link to="/signin" className="header_mobile_user">
                            <img src={UserImg} alt="user" className="h_mobile_user_photo"/>
                        </Link>
                        :
                        <Link to="/profile" className="header_mobile_user">
                            <img src={user.photo} alt="user" className="h_mobile_user_photo"/>
                        </Link>
                    }
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.main.currentPage,
        user: state.user.user,
        windowWidth: state.main.windowWidth,
    }
};

export default connect(mapStateToProps)(Header);