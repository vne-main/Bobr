import React, {Component} from 'react';
import './style.css';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {likeIncrement} from "../../../Store/actions";
import NewsItem from '../NewsItem';

class NewsList extends Component {
    render(){
        console.log(this.props.news);
        return(
            <section className="news_list">
                <NewsItem/>
                <NewsItem/>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        news: state.news
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        likeIncrement: bindActionCreators(likeIncrement, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
