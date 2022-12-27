import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyButton from '../UI/Button/Button'

const ErrorModal = props => {
  return (
    <>
      <Modal show={props.show} >
        <Modal.Header closeButton>
          <Modal.Title>Invalid input</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.error}</Modal.Body>
        <Modal.Footer>
          <MyButton type="submit" onClick={props.onClick}>Close</MyButton>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ErrorModal;