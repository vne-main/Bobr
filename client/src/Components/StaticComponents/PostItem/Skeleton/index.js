import React, {Component} from 'react';
import './style.css';
import Skeleton from 'react-loading-skeleton';
import connect from "react-redux/es/connect/connect";

class PostSkeleton extends Component {
    render() {
        const {currentPage} = this.props;
        return (
            <section className="news_item">
                <div className="top_user skeleton_container">
                    <Skeleton width={24} height={24} className="user_icon"/>
                    <div className="post_skeleton_author">
                        <Skeleton width={45} height={15} />
                    </div>
                    <Skeleton width={115} height={15}/>
                </div>
                <Skeleton width={200} height={35}/>
                <div className="skeleton_container post_skeleton_tags">
                    <Skeleton width={40} height={15} count={3}/>
                </div>
                <div className="text_news">
                    <Skeleton width={450} height={15} count={3}/>
                </div>
                {
                    currentPage !== "post" &&
                    <Skeleton width={140} height={40}/>
                }

                <div className="post_skeleton_panel">
                    <Skeleton width={340} height={45}/>
                </div>
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