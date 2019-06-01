import React from 'react';
import './style.css';
import Modal from '../hoc';

class ModalBugReport extends React.Component {

    render() {
        return (
            <div>
                <h3 className="modal__header modal__padding">Отчёт о баге</h3>
                <div className="modal__padding modal__bug--panel">
                    <label className="modal__bug--label">
                        <span>Имя</span>
                        <input type="text"/>
                    </label>
                    <label className="modal__bug--label">
                        <span>Описание</span>
                        <textarea/>
                    </label>
                    <button className="blue_button modal__bug--send">
                        Отправить
                    </button>
                </div>
            </div>
        )
    };
}

export default Modal(ModalBugReport);