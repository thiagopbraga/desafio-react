import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ButtonClose,
  Formulario,
  Label,
  Input,
  Button,
} from "./styles";
import { useRef } from "react";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

const ModalCreateProduct = ({ visible, onClose }: ModalProps) => {
  if (!visible) {
    return null;
  }

  const handleCloseModal = () => {
    onClose();
  };

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(formRef.current!);
    const data = Object.fromEntries(formData);
    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json().then((data) => console.log(data)));
    /* refresh screen */
    window.location.reload();
  };

  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <h1>Adicionar produto</h1>
          <ButtonClose onClick={onClose}>X</ButtonClose>
        </ModalHeader>
        <ModalBody>
          <Formulario ref={formRef} onSubmit={handleSubmit}>
            <Label htmlFor="codigo">Código</Label>
            <Input type="text" id="codigo" name="codigo" />
            <Label htmlFor="nome">Nome</Label>
            <Input type="text" id="nome" name="nome" />
            <Label htmlFor="preco">Preço</Label>
            <Input type="text" id="preco" name="preco" />
            <Label htmlFor="descricao">Descrição</Label>
            <Input type="text" id="descricao" name="descricao" />
            <Button type="submit">Cadastrar</Button>
          </Formulario>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalCreateProduct;
