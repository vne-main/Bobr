import React, {Component} from 'react';
import './style.css';
import {bindActionCreators} from "redux";
import {changeCurrentPage, logout} from "../../Store/actions";

/* Module */
import {Redirect} from "react-router";

/* Redux */
import connect from "react-redux/es/connect/connect";

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        }
    }

    authOut() {
        this.props.logout();
        this.setState({redirect: true})
    }

    componentWillMount() {
        this.props.changeCurrentPage('profile');
    }

    render() {
        const {user} = this.props;
        const {redirect} = this.state;
        if (redirect || !user._id) return <Redirect to='/'/>;
        return (
            <div>
                <button className="blue_button" onClick={() => this.authOut()}>Выход</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
        user: state.user,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
        logout: bindActionCreators(logout, dispatch),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);