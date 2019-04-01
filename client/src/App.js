import React, {Component} from "react";

/* Module */
import axios from 'axios';
import {Route, HashRouter, Switch} from 'react-router-dom';

/* Components */
import RightColumn from './Components/RightColumn';
import NotFound from './Components/StaticComponents/NotFound';
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

/* Redux */
import {bindActionCreators} from "redux";
import {getPostList, getUser} from "./Store/actions";
import connect from "react-redux/es/connect/connect";

class App extends Component {

    componentDidMount() {
        axios.get('/post')
            .then(res => this.props.getPostList(res.data))
            .catch(err => console.error(err));

        const userToken = localStorage.getItem('vC3ilOckStoreMode23Port');
        if (!userToken) return;
        axios.post('/auth/check', {token: userToken})
            .then(res => {this.props.getUser(res.data)})
            .catch(err => console.error(err));
    };

    render() {
        const {currentPage} = this.props;
        const notCurrent = ['auth','profile','channels'];
        return (
            <HashRouter>
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
                                <Route path="/signin" component={SignIn}/>
                                <Route path="/signup" component={SignUp}/>
                                <Route path="/chat" component={Chat}/>
                                <Route component={NotFound}/>
                            </Switch>
                            {notCurrent.indexOf(currentPage) === -1 && <RightColumn/>}
                        </main>
                    </div>
                    {currentPage !== "auth" && <Footer/>}
                </div>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPostList: bindActionCreators(getPostList, dispatch),
        getUser: bindActionCreators(getUser, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);