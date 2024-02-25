import styled from '@emotion/styled';

const Modal = ({ message, onConfirm, onCancel }) => {
  return (
    <ModalContainer>
      <ModalMessage>{message}</ModalMessage>
      <ModalButtons>
        <ModalButton onClick={onConfirm}>Confirm</ModalButton>
        <ModalButton onClick={onCancel}>Cancel</ModalButton>
      </ModalButtons>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 999;
  text-align: center;
`;

const ModalMessage = styled.p`
  margin-bottom: 20px;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
`;

const ModalButton = styled.button`
  margin: 0 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
