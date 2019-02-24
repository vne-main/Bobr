import React, {Component} from "react";
import {Route, HashRouter} from 'react-router-dom';

/*** Components ***/
import RightColumn from './Components/StaticComponents/RightColumn';
import Header from './Components/StaticComponents/Header';
import Footer from './Components/StaticComponents/Footer';
import Home from './Components/Home';
import Post from './Components/Post';
import Publish from './Components/Publish';


import Test from './Components/StaticComponents/PostItem/Skeleton/index';

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
        // this.startRequest();
    };

    render() {
        return (
            <HashRouter>
                <div className="vh_block">
                    <div>
                        <Header/>
                        <main className="container main">
                            <Route exact path="/" component={Home}/>
                            <Route path="/post" component={Post}/>
                            <Route path="/publish" component={Publish}/>
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