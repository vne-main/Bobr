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
            status: "",
            tagsData: ['Bobr'],
        };
    }

    writeTag(char) {
        let searchIndex = char.indexOf(' ');
        if (searchIndex !== -1) {
            if(char === " ")  return false;
            let tagsArray = this.state.tagsData;
            tagsArray.push(char.trim());
            this.setState({
                tagsData: tagsArray,
                tags: ""
            });
        } else {
            this.setState({tags: char});
        }
    }

    handleDelete = data => () => {
        this.setState(state => {
            const tagsData = [...state.tagsData];
            const chipToDelete = tagsData.indexOf(data);
            tagsData.splice(chipToDelete, 1);
            return {tagsData};
        });
    };

    successSend = async () => {
        const requestGetPosts = await fetch('/post');
        const postList = await requestGetPosts.json();
        this.props.getPostList(postList);
        this.statusSent("Новость опубликована");
        this.setState({
            tagsData: ["Bobr"],
            title: "",
            tags: "",
            text: ""
        });
    };

    publishPost = async () => {
        this.statusSent("Пожалуйста, подождите...");
        const jsonData = this.checkData();
        if (!jsonData) return false;
        const requestPublish = await fetch('/post', {
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
            this.statusSent("Введите все данные");
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

    statusSent = (info) => {
        this.setState({status: info});
    };

    componentWillMount() {
        this.props.changeCurrentPage("publish");
        window.scrollTo(0, 0);
    }

    render() {
        const {title, tags, text, status} = this.state;
        return (
            <section className="publish_page">
                <h3 className="title_h3 title_pages">
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
                    <label>Теги (через пробел)</label>
                    <div className="tags_aside">
                        <input
                            type="text"
                            placeholder="Введите тег..."
                            value={tags}
                            onChange={(e) => this.writeTag(e.target.value)}
                        />
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
                    <p>{status}</p>
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