import React, {Component} from 'react';
import './style.css';
import SearchIcon from "@material-ui/icons/Search";

/* Component */
import PostItem from "../StaticComponents/PostItem";
import PostItemMobile from "../StaticComponents/PostItem/mobile";

/* Redux */
import {bindActionCreators} from "redux";
import {changeCurrentPage} from "../../Store/Actions/actionMain";
import {searchPost, getPostList} from "../../Store/Actions/actionPost";
import connect from "react-redux/es/connect/connect";

class Search extends Component {

    state = {
        searchString: "",
    };

    search() {
        const {searchString} = this.state;
        if (searchString.trim() === "") return;
        this.props.searchPost(searchString.trim());
    }

    componentDidMount() {
        const {postList, changeCurrentPage, getPostList, searchPost} = this.props;
        searchPost("");
        changeCurrentPage('search');
        if (!postList.length) getPostList();
    }

    render() {
        const {searchList, searchPost} = this.props;
        return (
            <section>
                <h3 className="title_h3 title_pages">Поиск постов</h3>
                <div className="search_panel">
                    <input type="text"
                           placeholder="Поиск постов"
                           onChange={(e) => searchPost(e.target.value)}
                    />
                    <SearchIcon/>
                </div>
                <div className="search_list">
                    {searchList.map((el, i) => {
                        return (
                            <div key={i}>
                                <section className="h_full_post">
                                    <PostItem post={el} key={i}/>
                                </section>
                                <section className="h_mobile_post">
                                    <PostItemMobile post={el} key={i}/>
                                </section>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchList: state.post.searchList,
        postList: state.post.postList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
        searchPost: bindActionCreators(searchPost, dispatch),
        getPostList: bindActionCreators(getPostList, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);