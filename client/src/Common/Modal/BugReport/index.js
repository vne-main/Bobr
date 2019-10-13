import React from 'react';
import './style.css';
import Modal from '../hoc';

class ModalBugReport extends React.Component {
  state = {
    status: '',
    name: '',
    text: '',
  };

  sendForm() {
    const { name, text } = this.state;

    this.setState({ status: 'Пожалуйста, подождите...' });

    if (!name) {
      this.setState({ status: 'Введите имя' });
    } else if (!text) {
      this.setState({ status: 'Введите описание' });
    } else {
      this.setState({
        status: 'Спасибо за ваш отчёт!',

        name: '',

        text: '',
      });
    }
  }

  render() {
    const { status, name, text } = this.state;

    return (
      <div>
        <h3 className="modal__header modal__padding">Отчёт о баге / Пожелания</h3>

        <div className="modal__padding modal__bug--panel">
          <label className="modal__bug--label">
            <span>Имя</span>

            <input
              type="text"
              placeholder="Введите имя"
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </label>

          <label className="modal__bug--label">
            <span>Описание</span>

            <textarea
              placeholder="Введите описание бага или ваши пожелания"
              value={text}
              onChange={e => this.setState({ text: e.target.value })}
            />
          </label>

          <div className="modal__send_form">
            <p className="status_p">{status}</p>

            <button className="blue_button modal__bug--send" onClick={() => this.sendForm()}>
              Отправить
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal(ModalBugReport);
