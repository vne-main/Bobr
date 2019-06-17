import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './style.css';

/* Component */
import IconPanel from './IconPanel';
import ModalSettings from "../Modal/Settings";
import ModalBugReport from "../Modal/BugReport";

/* MATERIAL */
import MobileHeader from './MobileHeader';
import MobilePanel from './MobilePanel';

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
        modalBug: false,
        modalSettings: false,
    };

    render() {
        const {navigation, modalSettings, modalBug} = this.state;
        const {currentPage, user, windowWidth} = this.props;
        return (
            <section className="header">
                <ModalSettings
                    open={modalSettings}
                    fnClose={() => this.setState({modalSettings: false})}
                    windowWidth={windowWidth}
                />
                <ModalBugReport
                    open={modalBug}
                    fnClose={() => this.setState({modalBug: false})}
                    windowWidth={windowWidth}
                />
                <div className="container">
                    {windowWidth <= 800 ?
                        <>
                            <MobileHeader navigation={navigation}/>
                            <Link to="/" className="header_logo">bobr</Link>
                            <MobilePanel
                                openBugModal={() => this.setState({modalBug: true})}
                                openSettingsModal={() => this.setState({modalSettings: true})}
                            />
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
                            <IconPanel
                                user={user}
                                openBugModal={() => this.setState({modalBug: true})}
                                openSettingsModal={() => this.setState({modalSettings: true})}
                            />
                        </>
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