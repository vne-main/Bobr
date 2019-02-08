
import React, {Component} from 'react';
import './style.css';
import {bindActionCreators} from "redux";
import {changeCurrentPage, getPostList} from "../../Store/actions";
import connect from "react-redux/es/connect/connect";

class Publish extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Заголовок Новости",
            tags: "Мои теги, Текст Тега",
            text: "Текстовы тест",
        };
    }

    publishPost = async () => {
        const {title, tags, text} = this.state;
        if(title === "" || tags === "" || text === "") return false;
        const requestPublish = await fetch('/api/publish', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                tags: [tags],
                text: text
            }),
        });
        const statusPublish = await requestPublish.text();
        if (statusPublish === "OK") {
            const requestGetPosts = await fetch('/api');
            const postList = await requestGetPosts.json();
            this.props.getPostList(postList);
            this.setState({
                title: "", tags: "", text: ""
            });
        } else {
            console.log("Error");
        }
    };

    componentWillMount() {
        this.props.changeCurrentPage("publish");
    }

    render() {
        const {title, tags, text} = this.state;
        return (
            <section>
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
                <button
                    className="blue_button publish_form"
                    onClick={() => this.publishPost()}
                >
                    Опубликовать
                </button>
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