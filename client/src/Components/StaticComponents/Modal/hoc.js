import React, {Component} from 'react';
import './style.css';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '../../../Static/img/modal/close.svg';

const Modal = (Component) => {

    return class extends React.Component {
        render() {
            const {open, fnClose} = {...this.props};
            return (
                <Dialog
                    open={open}
                    onClose={fnClose}
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
                            onClick={fnClose}
                        />
                        <div>
                            <Component {...this.props}/>
                        </div>
                    </div>
                </Dialog>
            );
        }
    }
};

export default Modal;