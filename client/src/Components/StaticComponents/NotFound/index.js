import React, {Component} from 'react';
import './style.css';

import NotFoundImg from '../../../Static/img/404.png';

export default class NotFound extends Component {
    render() {
        return (
            <section className="page_not_found">
                <img src={NotFoundImg} alt="NotFound"/>
            </section>
        )
    }
}