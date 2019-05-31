import React, {Component} from 'react';
import './style.css';
import Dialog from '@material-ui/core/Dialog';

import CloseIcon from '../../../Static/img/modal/close.svg';

const Modal = (Component) => {

    return class extends React.Component {

        state = {open: false};

        componentWillReceiveProps(nextProps) {
            this.setState({open: nextProps.open});
        }

        render() {
            console.info(this.props);
            return (
                <Dialog
                    open={this.state.open}
                    onClose={() => this.setState({open: false})}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth="xs"
                    fullWidth={true}
                >
                    <div className="modal__container">
                        <img
                            src={CloseIcon}
                            alt="closeModal"
                            className="modal__close"
                            onClick={() => this.setState({open: false})}
                        />
                        <Component {...this.props}/>
                    </div>
                </Dialog>
            );
        }
    }

};

export default Modal;