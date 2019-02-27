import React, {Component} from 'react';
import './style.css';
import axios from "axios";

export default class Banner extends Component {

    state = {
        gifBackground: "",
        active: false,
    };

    getGif() {
        let refresh;
        const duration = 1000 * 10;
        const giphy = {
            baseURL: "https://api.giphy.com/v1/gifs/",
            key: "dc6zaTOxFJmzC",
            tag: "fail",
            type: "random",
            rating: "pg-13"
        };

        let giphyURL = encodeURI(
            giphy.baseURL +
            giphy.type +
            "?api_key=" +
            giphy.key +
            "&tag=" +
            giphy.tag +
            "&rating=" +
            giphy.rating
        );

        let newGif = () => {
            axios.get(giphyURL).then(
                res => {
                    this.setState({
                        gifBackground: res.data.data.image_original_url
                    });
                    clearInterval(refresh);
                    refresh = setInterval(function () {
                        newGif();
                    }, duration);
                }
            );
        };
        newGif();
    }


    render() {
        const bannerStyle = {
            backgroundImage: `url(${this.state.gifBackground})`,
            backgroundSize: 'cover',
        };
        return (
            <div className="right_column_box advertising" style={bannerStyle}>
                {
                    this.state.gifBackground === "" &&
                    <button className="blue_button"
                            onClick={() => this.getGif()}
                    >
                        Запустить
                    </button>
                }
            </div>
        )
    }
}