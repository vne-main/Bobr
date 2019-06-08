import React, {Component} from 'react';
import './style.css';
import Dialog from '@material-ui/core/Dialog';

/* Redux */
import {store} from "../../../index";
import {closeModal} from "../../../Store/Actions/actionModal";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import CloseIcon from '../../../Static/img/modal/close.svg';

const Modal = (Component) => {

    return class extends React.Component {

        render() {
            const {openModal, fnClose} = {...this.props};
            return (
                <Dialog
                    open={openModal}
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
                        <Component {...this.props}/>
                    </div>
                </Dialog>
            );
        }
    }
};

export default Modal;

