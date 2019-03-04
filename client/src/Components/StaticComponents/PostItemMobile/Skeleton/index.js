import React, {Component} from 'react';
import './style.css';
import connect from "react-redux/es/connect/connect";

class PostSkeleton extends Component {
    render() {
        const {currentPage} = this.props;
        return (
            <section className="news_item">
                <div className="top_user">
                    <span className="skeleton sk_post_user_icon"/>
                    <span className="skeleton sk_post_author"/>
                    <span className="skeleton sk_post_time"/>
                </div>
                <span className="skeleton sk_post_title"/>
                <div className="sk_post_tags">
                    <span className="skeleton"/>
                    <span className="skeleton"/>
                    <span className="skeleton"/>
                </div>
                <div className="sk_post_text">
                    <span className="skeleton"/>
                    <span className="skeleton"/>
                    <span className="skeleton"/>
                </div>
                {
                    currentPage !== "post" &&
                    <span className="skeleton sk_post_more"/>
                }
                <span className="skeleton sk_post_panel"/>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
    }
};

export default connect(mapStateToProps)(PostSkeleton);