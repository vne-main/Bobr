import React, {Component} from "react";
import {Route, HashRouter} from 'react-router-dom';

/*** Components ***/
import RightColumn from './Components/RightColumn';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Post from './Components/Post';

export default class App extends Component {
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