import React, {Component} from "react";
import {Route, HashRouter} from 'react-router-dom';

/** Components **/
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component={Main}/>
                    <Footer/>
                </div>
            </HashRouter>
        );
    }
}

