import React, {Component} from 'react';
import './style.css';

/* Module */
import openSocket from 'socket.io-client';

/* Function */
import {changePage} from "../../Requsets/function";

class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            socket: openSocket('http://localhost:3002'),
            login: `Bobr #${Math.random(1000).toFixed(3).split('.')[1]}`,
            message: "",
            messageList: [],
        };
        const sentMessage = this.sentMessage.bind(this);
        this.state.socket.on('chat message', function (msg) {
            sentMessage(msg)
        });
    }

    sentMessage(msg) {
        this.setState({
            message: "",
            messageList: [msg].concat(this.state.messageList),
        });
    }

    sendMessage() {
        const {message, login, socket} = this.state;
        if(!message.trim()) return false;
        let msg = {
            message: message,
            login: login,
            time: new Date(),
        };
        socket.emit('chat message', msg);
    }

    componentDidMount() {
        changePage("chat");
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
                            <li>Добро пожаловать в тестовый чат!</li>
                        </ol>
                        <div className="chat_send">
                            <input
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

export default Chat;