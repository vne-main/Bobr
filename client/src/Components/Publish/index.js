import React, {Component} from 'react';
import './style.css';
import {bindActionCreators} from "redux";
import {changeCurrentPage, getPostList} from "../../Store/actions";
import connect from "react-redux/es/connect/connect";

class Publish extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            tags: "",
            text: "",
            success: false,
            error: false,
            fill: false,
        };
    }

    checkData(){
        const {title, tags, text} = this.state;
        if (title === "" || tags === "" || text === "") {
            this.setState({
                success: false,
                error: false,
                fill: true,
            });
            return false;
        }
        return {
            text: text,
            tags: [tags],
            title: title
        };
    };

    successSend = async () => {
        const requestGetPosts = await fetch('/api');
        const postList = await requestGetPosts.json();
        this.props.getPostList(postList);
        this.setState({
            title: "",
            tags: "",
            text: "",
            success: true,
            error: false,
            fill: false,
        });
    };

    publishPost = async () => {
        const jsonData = this.checkData();
        if (!jsonData) return false;
        const requestPublish = await fetch('/api/publish', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(jsonData),
        });
        const statusPublish = await requestPublish.text();
        if (statusPublish === "OK") {
            this.successSend();
        } else {
            this.setState({
                success: false,
                fill: false,
                error: true,
            });
            console.log("Error");
            console.log(statusPublish);
        }
    };

    componentWillMount() {
        this.props.changeCurrentPage("publish");
    }

    render() {
        const {title, tags, text, success, error, fill} = this.state;
        return (
            <section className="publish_page">
                <h3 className="title_h3 publish_title">
                    Опубликовать новость
                </h3>
                <aside className="publish_label">
                    <label>Название новости</label>
                    <input
                        type="text"
                        placeholder="Заголовок..."
                        value={title}
                        onChange={(e) => this.setState({title: e.target.value})}
                    />
                </aside>
                <aside className="publish_label">
                    <label>Теги</label>
                    <input
                        type="text"
                        placeholder="Теги..."
                        value={tags}
                        onChange={(e) => this.setState({tags: e.target.value})}
                    />
                </aside>
                <aside className="publish_label">
                    <label>Текст</label>
                    <textarea
                        placeholder="Текст новости..."
                        value={text}
                        onChange={(e) => this.setState({text: e.target.value})}
                    />
                </aside>
                <div className="send_comment_panel">
                    <button
                        className="blue_button publish_form"
                        onClick={() => this.publishPost()}
                    >
                        Опубликовать
                    </button>
                    {success && <p>Новость опубликована</p>}
                    {error && <p className="error_color">Ошибка сервера</p>}
                    {fill && <p className="error_color">Заполните все поля</p>}
                </div>

            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
        getPostList: bindActionCreators(getPostList, dispatch),
    }
};

export default connect("", mapDispatchToProps)(Publish);