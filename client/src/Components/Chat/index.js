import React, {Component} from 'react';
import './style.css';

/* Module */
import openSocket from 'socket.io-client';

/* Img */

/* Redux */
import {bindActionCreators} from "redux";
import {changeCurrentPage} from "../../Store/Actions/actionMain";
import {connect} from "react-redux";


class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            socket: openSocket('http://localhost:3002'),
            login: `Bobr #${Math.random(1000).toFixed(3).split('.')[1]}`,
            message: "",
            messageList: [
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},
                {"message":"s","login":"Bobr #165","time":"2019-06-20T15:51:10.133Z"},

                ],
        };
        const sentMessage = this.sentMessage.bind(this);
        this.state.socket.on('chat message', function (msg) {
            sentMessage(msg)
        });
    }

    sentMessage(msg) {
        this.setState({
            message: "",
            messageList: this.state.messageList.concat(msg),
        });
    }

    sendMessage() {
        const {message, login, socket} = this.state;
        let msg = {
            message: message,
            login: login,
            time: new Date(),
        };
        socket.emit('chat message', msg);
    }

    componentDidMount() {
        this.props.changeCurrentPage("chat");
    }

    render() {
        let {message, messageList} = this.state;
        return (
            <section>
                <h3 className="title_h3 title_pages">Чат</h3>

                <div className="chat_container">

                    <div className="chat_absolute">


                        <ol className="chat_history">
                            {messageList.map((el, i) => {
                                const formatDate = new Date(el.time).toLocaleString().split(",")[1];
                                return (
                                    <li key={i}>
                                        <span>{el.login}: {el.message}</span>
                                        <span>{formatDate}</span>
                                    </li>
                                )
                            })}
                        </ol>

                        <div className="chat_send">
                            <textarea
                                value={message}
                                onChange={(e) => this.setState({message: e.target.value})}
                                onKeyPress={(e) => e.charCode === 13 && this.sendMessage()}
                                placeholder="Введите сообщение..."
                            />
                            <button
                                className="blue_button"
                                onClick={() => this.sendMessage()}
                            >Отправить
                            </button>
                        </div>

                    </div>

                </div>

            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
    }
};

export default connect("", mapDispatchToProps)(Chat);