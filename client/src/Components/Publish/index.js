import React, {Component} from 'react';
import './style.css';
import {bindActionCreators} from "redux";
import {changeCurrentPage, getPostList} from "../../Store/actions";
import connect from "react-redux/es/connect/connect";

/** MATERIAL **/
import Chip from '@material-ui/core/Chip';

class Publish extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            tags: "",
            text: "",
            statusSent: {
                status: "",
                active: false
            },
            tagsData: ['Bobr'],
        };
    }

    addTag() {
        if (this.state.tags === "") return false;
        let tagsArray = this.state.tagsData;
        tagsArray.push(this.state.tags);
        this.setState({
            tagsData: tagsArray,
            tags: ""
        });
    };

    handleDelete = data => () => {
        this.setState(state => {
            const tagsData = [...state.tagsData];
            const chipToDelete = tagsData.indexOf(data);
            tagsData.splice(chipToDelete, 1);
            return {tagsData};
        });
    };

    successSend = async () => {
        const requestGetPosts = await fetch('/api/posts');
        const postList = await requestGetPosts.json();
        this.props.getPostList(postList);
        this.setState(prevState => ({
            statusSent: {
                ...prevState.statusSent,
                active: true,
                status: "Новость опубликована",
            },
            tagsData: ["Bobr"],
            title: "",
            tags: "",
            text: ""
        }));
    };

    publishPost = async () => {
        const jsonData = this.checkData();
        if (!jsonData) return false;
        const requestPublish = await fetch('/api/add_post', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(jsonData),
        });
        const statusPublish = await requestPublish.json();
        console.log(statusPublish);
        this.successSend();
    };

    checkData() {
        const {title, text, tagsData} = this.state;
        if (title === "" || tagsData.length === 0 || text === "") {
            this.setState(prevState => ({
                statusSent: {
                    ...prevState.statusSent,
                    active: true,
                    status: "Введите все данные"
                }
            }));
            return false;
        }
        return {
            author_name: "Admin",
            author_img: "https://storage.googleapis.com/vasenking/user_icon/user_0.jpg",
            text: text,
            tags: tagsData,
            title: title
        };
    };

    componentWillMount() {
        this.props.changeCurrentPage("publish");
    }

    render() {
        const {title, tags, text, statusSent} = this.state;
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
                    <div className="tags_aside">
                        <input
                            type="text"
                            placeholder="Введите тег..."
                            value={tags}
                            onChange={(e) => this.setState({tags: e.target.value})}
                        />
                        <button className="blue_button"
                                onClick={() => this.addTag()}
                        >
                            Добавить
                        </button>
                    </div>
                </aside>
                <aside className="tags_array">
                    {this.state.tagsData.map((data, i) => {
                        return (
                            <Chip
                                key={i}
                                className="new_tag"
                                label={data}
                                onDelete={this.handleDelete(data)}
                            />
                        );
                    })}
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
                    {statusSent.active && <p>{statusSent.status}</p>}
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