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
import {changeCurrentPost} from "../../Store/Actions/actionPost";
import connect from "react-redux/es/connect/connect";

class Post extends Component {

    state = {
        skeleton: true,
        statusPost: true,
    };

    getIdPost() {
        let urlArray = document.location.href.split('/');
        return urlArray[urlArray.length - 1];
    }

    componentDidMount() {
        this.props.changeCurrentPage("post");
        let idPost = this.getIdPost();
        !idPost ?
            this.setState({statusPost: false})
            :
            getPost(idPost)
                .then(res => {
                    this.props.changeCurrentPost(res.data);
                    this.setState({skeleton: false});
                })
                .catch((err) => {
                    console.error(err);
                    this.setState({statusPost: false})
                });
    }

    render() {
        const {skeleton, statusPost} = this.state;
        const {currentPost} = this.props;
        return (
            <section>
                {statusPost ?
                    <div>
                        {skeleton ?
                            <div>
                                <PostSkeleton/>
                                <CommentsSkeleton/>
                            </div>
                            :
                            <div>
                                <PostItem post={currentPost}/>
                                <Comments comments={currentPost.comments} postId={currentPost._id}/>
                            </div>
                        }
                    </div>
                    :
                    <NotFound/>
                }
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPost: state.post.currentPost,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPost: bindActionCreators(changeCurrentPost, dispatch),
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);