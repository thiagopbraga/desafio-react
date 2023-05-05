import styled from "styled-components";
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 500px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const ModalBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  gap: 10px;
`;

const ButtonClose = styled.button`
  font-size: 15px;
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  font-size: 20px;
  padding: 10px;
`;

const Input = styled.input`
  font-size: 1.2rem;
  padding: 5px 10px;
  width: 300px;
  outline: none;
  border: 1px solid #000;
  border-radius: 5px;
`;

const Button = styled.button`
  font-size: 20px;
  padding: 10px;
  margin-top: 20px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #000a;
  }
`;

export {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ButtonClose,
  Formulario,
  Label,
  Input,
  Button,
};