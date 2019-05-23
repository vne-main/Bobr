import React, {Component} from 'react';

/* Request */
import {getPost} from '../../Requsets/apiPost';

/* Components */
import PostSkeleton from "../StaticComponents/PostItem/Skeleton/index";
import PostItem from "../StaticComponents/PostItem";
import CommentsSkeleton from "./Comments/Skeleton";
import Comments from './Comments';
import NotFound from '../NotFound';

/* Module */
import {bindActionCreators} from "redux";
import {changeCurrentPage} from "../../Store/Actions/actionMain";
import {getCurrentPost} from "../../Store/Actions/actionPost";
import connect from "react-redux/es/connect/connect";

class Post extends Component {

    componentDidMount() {
        const {changeCurrentPage, getCurrentPost} = this.props;
        changeCurrentPage("post");
        getCurrentPost();
    }

    render() {
        const {currentPost, loading} = this.props;
        return (
            <section>
                {loading &&
                    <>
                        <PostSkeleton/>
                        <CommentsSkeleton/>
                    </>
                }
                {!loading && currentPost &&
                    <>
                        <PostItem post={this.props.currentPost}/>
                        <Comments comments={currentPost.comments} postId={currentPost._id}/>
                    </>
                }
                {/*<NotFound/>*/}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPost: state.post.currentPost,
        loading: state.post.loading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentPost: bindActionCreators(getCurrentPost, dispatch),
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);