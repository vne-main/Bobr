import React, {Component} from 'react';
import './style.css';

/** Components **/
import RightColumn from './RightColumn';
import LeftColumn from './LeftColumn';

export default class Main extends Component {
    render() {
        return (
            <div className="container main">
                <LeftColumn/>
                <RightColumn/>
            </div>
        )
    }
}