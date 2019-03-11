import React, {Component} from "react";
import {Route, HashRouter, Switch} from 'react-router-dom';
// import queryString from "query-string";

/*** Components ***/
import RightColumn from './Components/RightColumn';
import NotFound from './Components/StaticComponents/NotFound';
import Header from './Components/StaticComponents/Header';
import Footer from './Components/StaticComponents/Footer';
import Home from './Components/Home';
import Post from './Components/Post';
import Publish from './Components/Publish';
import Users from './Components/Users';
import SignIn from './Components/Auth/signin';
import SignUp from './Components/Auth/signup';

/** Redux **/
import {bindActionCreators} from "redux";
import {getPostList} from "./Store/actions";
import connect from "react-redux/es/connect/connect";

class App extends Component {

    startRequest = async () => {
        const requestGetPosts = await fetch('/post');
        const postList = await requestGetPosts.json();
        this.props.getPostList(postList);
    };

    componentWillMount() {
        this.startRequest();
        // const query = queryString.parse(window.location.search);
        // if(query.token) localStorage.setItem('token', JSON.stringify(query.token));
    };

    render() {
        const {currentPage} = this.props;
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
                                <Route path="/signin" component={SignIn}/>
                                <Route path="/signup" component={SignUp}/>
                                <Route component={NotFound}/>
                            </Switch>
                            {currentPage !== "auth" && <RightColumn/>}
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);