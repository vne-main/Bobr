import React, { Component } from "react";
import "./style.css";
import SearchIcon from "@material-ui/icons/Search";

/* Const */
import { PAGES_URL } from "Const/pages";

/* Function */
import { changePage } from "Requsets/function";

/* Component */
import PostItem from "Common/PostItem";
import PostItemMobile from "Common/PostItem/mobile";

/* Redux */
import { bindActionCreators } from "redux";
import { searchPost, getPostList } from "Store/Actions/actionPost";
import connect from "react-redux/es/connect/connect";

class Search extends Component {
  state = {
    searchString: ""
  };

  search() {
    const { searchString } = this.state;
    if (searchString.trim() === "") return;
    this.props.searchPost(searchString.trim());
  }

  componentDidMount() {
    const { postList, getPostList, searchPost } = this.props;
    searchPost("");
    changePage(PAGES_URL.search);
    if (!postList.length) getPostList();
  }

  render() {
    const { searchList, searchPost } = this.props;
    return (
      <section>
        <h3 className="title_h3 title_pages">Поиск постов</h3>
        <div className="search_panel">
          <input
            type="text"
            placeholder="Поиск постов"
            onChange={e => searchPost(e.target.value)}
          />
          <SearchIcon />
        </div>
        <div className="search_list">
          {searchList.map((el, i) => {
            return (
              <div key={i}>
                <section className="h_full_post">
                  <PostItem post={el} key={i} />
                </section>
                <section className="h_mobile_post">
                  <PostItemMobile post={el} key={i} />
                </section>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchList: state.post.searchList,
    postList: state.post.postList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchPost: bindActionCreators(searchPost, dispatch),
    getPostList: bindActionCreators(getPostList, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
