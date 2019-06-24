import React, {Component} from "react";

/* Module */
import {Route, BrowserRouter, Switch} from 'react-router-dom';


/* Components */
import CatchError from './Components/StaticComponents/CatchError';
import RightColumn from './Components/RightColumn';
import NotFound from './Components/NotFound';
import Header from './Components/StaticComponents/Header';
import Footer from './Components/StaticComponents/Footer';
import Home from './Components/Home';
import Post from './Components/Post';
import Publish from './Components/Publish';
import Users from './Components/Users';
import Chat from './Components/Chat';
import SignIn from './Components/Auth/signin';
import SignUp from './Components/Auth/signup';
import Profile from './Components/Profile/';
import Search from './Components/Search/';
import Different from './Components/Different/';
import Statistics from './Components/Different/Statistics';
import Help from './Components/Different/Help';
import Advertising from './Components/Different/Advertising';
import Work from './Components/Different/Work';
import Documentation from './Components/Different/Documentation';
import About from './Components/Different/About';

/* Redux */
import {bindActionCreators} from "redux";
import {changeWindowWidth} from "./Store/Actions/actionMain";
import {getUser} from "./Store/Actions/actionUser";
import {connect} from "react-redux";

class App extends Component {

    componentDidMount() {
        document.getElementById("preloader").remove();
        window.addEventListener("resize", this.props.changeWindowWidth);
    };

    render() {
        const {currentPage, windowWidth} = this.props;
        const notCurrent = ['auth', 'profile', 'channels'];
        return (
            <BrowserRouter>
                <div className={currentPage === "auth" ? "vh_block_auth" : "vh_block"}>
                    <div>

                        {currentPage !== "auth" && <Header/>}
                        <main className="container main">
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/post" component={Post}/>
                                <Route path="/publish" component={Publish}/>
                                <Route path="/users" component={Users}/>
                                <Route path="/profile" component={Profile}/>
                                <Route path="/search" component={Search}/>
                                <Route path="/chat" component={Chat}/>
                                <Route path="/signin" component={SignIn}/>
                                <Route path="/signup" component={SignUp}/>
                                <Route path="/different" component={Different}/>
                                <Route path="/statistics" component={Statistics}/>
                                <Route path="/help" component={Help}/>
                                <Route path="/advertising" component={Advertising}/>
                                <Route path="/work" component={Work}/>
                                <Route path="/documentation" component={Documentation}/>
                                <Route path="/about" component={About}/>
                                <Route component={NotFound}/>
                            </Switch>
                            {notCurrent.indexOf(currentPage) === -1 && windowWidth > 800 && <RightColumn/>}
                        </main>
                        <CatchError/>
                    </div>
                    {currentPage !== "auth" && <Footer/>}
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.main.currentPage,
        windowWidth: state.main.windowWidth,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeWindowWidth: bindActionCreators(changeWindowWidth, dispatch),
        getUser: bindActionCreators(getUser, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);