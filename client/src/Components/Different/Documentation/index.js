import React, {Component} from 'react';
import './style.css';

/* Redux */
import {bindActionCreators} from "redux";
import {changeCurrentPage} from "../../../Store/Actions/actionMain";
import connect from "react-redux/es/connect/connect";

class Documentation extends Component {

    componentDidMount() {
        this.props.changeCurrentPage("different");
    }

    render() {
        return (
            <section>
                <h3 className="title_h3 title_pages">Документация</h3>
            </section>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
    }
};

export default connect("", mapDispatchToProps)(Documentation);