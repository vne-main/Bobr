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
        differentTop: [
            {href: "/statistics", title: "Статистика"},
            {href: "/help", title: "Помощь"},
            {href: "/advertising", title: "Реклама"},
        ],
        differentBottom: [
            {href: "", title: "Документация"},
            {href: "", title: "О сайте"},
            {href: "", title: "Работа"},
        ],
    };

    componentDidMount() {
        this.props.changeCurrentPage("different");
    }

    render() {
        const {differentTop} = this.state;
        return (
            <section>
                <h3 className="title_h3 title_pages">Разное</h3>
                <div className="different_container">
                    <div className="different_row">
                        {differentTop.map((el, i) => {
                            return (
                                <Link to={el.href} className="different_block" key={i}>{el.title}</Link>
                            )
                        })}
                    </div>
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