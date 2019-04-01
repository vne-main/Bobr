import React, {Component} from 'react';
import './style.css';

/* Module */
import axios from 'axios';

/* IMG */

/** Redux **/
import {bindActionCreators} from "redux";
import {changeCurrentPage} from "../../Store/actions";
import {connect} from "react-redux";

class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ws: new WebSocket('ws://localhost:3002'),
            message: "",
            list: [],
        }
    }

    webSocket() {
        const {ws} = this.state;

        const write = (message) => {
            this.setState({
                list: [{text: message}].concat(this.state.list),
                message: "",
            });
        };

        ws.onopen = function () {
            console.info("Connect");
        };

        ws.onmessage = function (e) {
            const message = e.data;
            write(message);
        };

        ws.onerror = function (err) {
            console.error(err);
        };
    }

    sendMessage(){
        const {ws, message} = this.state;
        ws.send(JSON.stringify(message));
        axios.post('/message', {text: message})
            .then(res => console.info(res))
            .catch(err => console.error(err));
    }

    componentDidMount() {
        this.webSocket();
        this.props.changeCurrentPage("chat");
        axios.get('/message')
            .then(res => this.setState({list: res.data.reverse()}))
            .catch(err => console.error(err));
    }

    render() {
        const {message, list} = this.state;
        return (
            <section>
                <h3 className="title_h3 title_pages">Чат</h3>
                <textarea
                    className="chat_send"
                    value={message}
                    onChange={(e) => this.setState({message: e.target.value})}
                    onKeyPress={(e) => e.charCode === 13 && this.sendMessage()}
                />

                <ol className="chat_container">
                    {list.map((el, i) => {
                        return (<li key={i}>{el.text}</li>)
                    })}
                </ol>

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