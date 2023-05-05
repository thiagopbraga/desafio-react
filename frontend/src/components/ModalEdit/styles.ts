import styled from 'styled-components';

export const Modal = styled.div`
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

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 500px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const ModalBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  gap: 10px;
`;

export const ButtonClose = styled.button`
  font-size: 15px;
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 20px;
  padding: 10px;
`;

export const Input = styled.input`
  font-size: 1.2rem;
  padding: 5px 10px;
  width: 300px;
  outline: none;
  border: 1px solid #000;
  border-radius: 5px;
`;

export const Textarea = styled.textarea`
  font-size: 1.2rem;
  padding: 5px 10px;
  width: 300px;
  outline: none;
  border: 1px solid #000;
  border-radius: 5px;
`;

export const Button = styled.button`
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
