import React, {Component} from 'react';
import './style.css';
import SearchIcon from "@material-ui/icons/Search";

/* Component */
import PostItem from "../StaticComponents/PostItem";
import PostItemMobile from "../StaticComponents/PostItem/mobile";

/* Redux */
import {bindActionCreators} from "redux";
import {changeCurrentPage, searchPost} from "../../Store/actions";
import connect from "react-redux/es/connect/connect";

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
        }
    }

    search() {
        const {searchString} = this.state;
        if (searchString.trim() === "") return;
        this.props.searchPost(searchString.trim());
    }

    componentDidMount() {
        this.props.changeCurrentPage("search");
    }

    render() {
        const {searchList} = this.props;
        return (
            <section>
                <h3 className="title_h3 title_pages">Поиск постов</h3>
                <div className="search_panel">
                    <input type="text"
                           placeholder="Поиск постов"
                           onChange={(e) => this.setState({searchString: e.target.value})}
                           onKeyPress={(e) => e.charCode === 13 && this.search()}
                    />
                    <SearchIcon/>
                </div>
                <div>
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
        searchList: state.searchList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
        searchPost: bindActionCreators(searchPost, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);