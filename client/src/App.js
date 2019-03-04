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
        return (
            <HashRouter>
                <div className="vh_block">
                    <div>
                        <Header/>
                        <main className="container main">
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/post" component={Post}/>
                                <Route path="/publish" component={Publish}/>
                                <Route path="/users" component={Users}/>
                                <Route component={NotFound}/>
                            </Switch>
                            <RightColumn/>
                        </main>
                    </div>
                    <Footer/>
                </div>
            </HashRouter>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPostList: bindActionCreators(getPostList, dispatch),
    }
};

export default connect("", mapDispatchToProps)(App);