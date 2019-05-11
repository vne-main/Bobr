import React, {Component} from 'react';
import './style.css';

/* Components */
import Graph from './Graph'
import Doughnut from './Doughnut'
import Bar from './Bar'

/* Redux */
import {bindActionCreators} from "redux";
import {changeCurrentPage} from "../../../Store/Actions/actionMain";
import connect from "react-redux/es/connect/connect";

class Statistics extends Component {

    componentDidMount() {
        this.props.changeCurrentPage("different");
    }

    render() {
        return (
            <section>
                <h3 className="title_h3 title_pages">Статистика</h3>

                <aside className="statistics_block">
                    <h4 className="statistics_graph_h4">Просмотры</h4>
                    <Graph/>
                </aside>

                <aside className="statistics_block">
                    <h4 className="statistics_graph_h4">Что-то ещё</h4>
                    <Bar/>
                </aside>

                <aside className="statistics_block">
                    <h4 className="statistics_graph_h4">Просмотры</h4>
                    <div className="statistics_doughnut">
                        <div>
                            <Doughnut/>
                        </div>
                        <div>
                            <Doughnut/>
                        </div>
                        <div>
                            <Doughnut/>
                        </div>
                        <div>
                            <Doughnut/>
                        </div>
                    </div>
                </aside>

            </section>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
    }
};

export default connect("", mapDispatchToProps)(Statistics);