import React, {Component} from 'react';

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
import axios from 'axios';

class Post extends Component {

    state = {
        skeleton: true,
        statusPost: true,
    };

    getPost(id) {
        axios.get(`/post/${id}`)
            .then(res => {
                console.info(res);
                this.props.changeCurrentPost(res.data)
            })
            .then(() => this.setState({skeleton: false}))
            .catch((err) => {
                console.error(err);
                this.setState({statusPost: false})
            });
    };

    componentDidMount() {
        this.props.changeCurrentPage("post");
        let urlArray = document.location.href.split('/');
        let idPost = urlArray[urlArray.length - 1];
        idPost ? this.getPost(idPost) : this.setState({statusPost: false});
    }

    render() {
        const {skeleton, statusPost} = this.state;
        const {currentPost} = this.props;
        return (
            <section>
                {!statusPost && <NotFound/>}
                {statusPost &&
                <div>
                    {skeleton ?
                        <div>
                            <PostSkeleton/>
                            <CommentsSkeleton/>
                        </div> :
                        <div>
                            <PostItem post={currentPost}/>
                            <Comments comments={currentPost.comments} postId={currentPost._id}/>
                        </div>
                    }
                </div>
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