import React from 'react';
import Modal from '../hoc';

const ModalSettings = () => {
  return (
    <div>
      <h3 className="modal__header modal__padding">Настройки</h3>
      <div className="modal__padding modal__bug--panel">
        <p>Данный раздел находиться в разработке</p>
      </div>
    </div>
  );
};

export default Modal(ModalSettings);
