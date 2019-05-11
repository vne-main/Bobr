import React, {Component} from 'react';
import './style.css';

/* Components */
import Expansion from './Expansion';

/* Redux */
import {bindActionCreators} from "redux";
import {changeCurrentPage} from "../../../Store/Actions/actionMain";
import connect from "react-redux/es/connect/connect";

class Help extends Component {

    state = {
        questions: [
            {title: "Чем я могу помочь", text: "Пиши мне, если будет желание - найдём какую-либо работу."},
            {title: "Что это такое?", text: "Это мой проектик, на котором я точу скил."},
            {title: "Что будет дальше?", text: "Масштабируемость, оптимизация, развитие!"},
            {title: "Чем я могу помочь", text: "Пиши мне, если будет желание - найдём какую-либо работу."},
            {title: "Что это такое?", text: "Это мой проектик, на котором я точу скил."},
            {title: "Что будет дальше?", text: "Масштабируемость, оптимизация, развитие!"},
            {title: "Чем я могу помочь", text: "Пиши мне, если будет желание - найдём какую-либо работу."},
            {title: "Что это такое?", text: "Это мой проектик, на котором я точу скил."},
            {title: "Что будет дальше?", text: "Масштабируемость, оптимизация, развитие!"},
            {title: "Чем я могу помочь", text: "Пиши мне, если будет желание - найдём какую-либо работу."},
            {title: "Что это такое?", text: "Это мой проектик, на котором я точу скил."},
            {title: "Что будет дальше?", text: "Масштабируемость, оптимизация, развитие!"},
        ]
    };

    componentDidMount() {
        this.props.changeCurrentPage("different");
    }

    render() {
        const {questions} = this.state;
        return (
            <section>
                <h3 className="title_h3 title_pages">Помощь</h3>
                <textarea placeholder="Введите ваш вопрос..." className="help_textarea"/>
                <div className="send_ask">
                    <button className="blue_button">
                        Отправить вопрос
                    </button>
                    <p className="status_p">Ошибка</p>
                </div>
                <h3 className="title_h3 title_pages">Частые вопросы</h3>
                <div className="help_faq">
                    {questions.map((question, i) => <Expansion index={i} key={i} question={question}/>)}
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

export default connect("", mapDispatchToProps)(Help);