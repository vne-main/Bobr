import React, {Component} from 'react';
import './style.css';

import NewsItem from '../NewsItem';

export default class NewsList extends Component {
    render(){
        return(
            <section className="news_list">
                <NewsItem/>
                <NewsItem/>
            </section>
        )
    }
}