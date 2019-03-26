import React, {Component} from 'react';
import './style.css';

/* IMG */

/** Redux **/
import {bindActionCreators} from "redux";
import {changeCurrentPage} from "../../Store/actions";
import {connect} from "react-redux";

class Channels extends Component {

    constructor(props){
        super(props);
        this.state = {
            ws: new WebSocket('ws://localhost:3001'),
            message: "",
            list: ['Привет'],
        }
    }

    webSocket() {
        const {ws} = this.state;

        const write = (message) => {
            let newList = [...this.state.list];
            newList.push(message);
            this.setState({list: newList});
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

    add(){
        const {ws, message} = this.state;
        ws.send(JSON.stringify(message));
        console.info("New message");
    }

    componentDidMount() {
        this.webSocket();
        this.props.changeCurrentPage("channels");
    }

    render() {
        const {message, list} = this.state;
        return (
            <section>
                <ol>
                    {list.map((el,i) =>{
                        return (<li key={i}>{el}</li>)
                    })}
                </ol>
                <textarea
                    value={message}
                    onChange={(e) => this.setState({message: e.target.value})}
                />
                <button onClick={() => this.add()}>Send</button>
            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
    }
};

export default connect("", mapDispatchToProps)(Channels);