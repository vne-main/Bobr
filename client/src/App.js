import React, {Component} from "react";
import {Route, HashRouter} from 'react-router-dom';

/*** Components ***/
import RightColumn from './Components/RightColumn';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Post from './Components/Post';

/** Redux **/
import {bindActionCreators} from "redux";
import {getPostList} from "./Store/actions";
import connect from "react-redux/es/connect/connect";

class App extends Component {

    startRequest = async () => {
        const requestPosts = await fetch('/api');
        const postList = await requestPosts.json();
        this.props.getPostList(postList);
    };

    componentWillMount(){
        this.startRequest();
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