import React, {Component} from 'react';
import './style.css';

/* IMG */

/** Redux **/
import {bindActionCreators} from "redux";
import {changeCurrentPage} from "../../Store/actions";
import {connect} from "react-redux";

class Channels extends Component {

    componentDidMount() {
        this.props.changeCurrentPage("channels");
    }

    render() {
        return (
            <section>


            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
    }
};

export default connect("", mapDispatchToProps)(Channels);