import React, {Component} from 'react';
import './style.css';

/* Module */
import {Link} from 'react-router-dom';

/* Redux */
import {bindActionCreators} from "redux";
import {changeCurrentPage} from "../../Store/Actions/actionMain";
import connect from "react-redux/es/connect/connect";

class Different extends Component {

    state = {
        differentPage: [
            {href: "/statistics", title: "Статистика"},
            {href: "/help", title: "Помощь"},
            {href: "/advertising", title: "Реклама"},
            {href: "/work", title: "Работа"},
            {href: "/documentation", title: "Документация"},
            {href: "/about", title: "О сайте"},
        ],
    };

    componentDidMount() {
        this.props.changeCurrentPage("different");
    }

    render() {
        const {differentPage} = this.state;
        return (
            <section>
                <h3 className="title_h3 title_pages">В разработке</h3>
                <div className="different_container">
                    {differentPage.map((el, i) => {
                        return (
                            <Link to={el.href} className="different_box" key={i}>
                                <div className="different_block">
                                    {el.title}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </section>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
    }
};

export default connect("", mapDispatchToProps)(Different);