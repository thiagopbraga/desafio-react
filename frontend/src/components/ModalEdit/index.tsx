import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ButtonClose,
  Formulario,
  Label,
  Input,
  Textarea,
  Button,
} from "./styles";

import { Product } from "../../types/Product";
import { useState } from "react";

interface ModalProps {
  visible: boolean;
  product: Product | null;
  onClose: () => void;
}

function ModalEdit({ visible, product, onClose }: ModalProps) {
  if (!visible) {
    return null;
  }

  const [codigo, setCodigo] = useState(product?.codigo);
  const [nome, setNome] = useState(product?.nome);
  const [preco, setPreco] = useState(product?.preco);
  const [descricao, setDescricao] = useState(product?.descricao);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(codigo, nome, preco, descricao);
    const data = {
      codigo,
      nome,
      preco,
      descricao,
    };

    fetch(`http://localhost:3001/products/${product?._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json().then((data) => console.log(data)));
    window.location.reload();
  }

  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <h1>Adicionar produto</h1>
          <ButtonClose onClick={onClose}>X</ButtonClose>
        </ModalHeader>
        <ModalBody>
          <Formulario onSubmit={handleSubmit}>
            <Label htmlFor="codigo">Código</Label>
            <Input
              type="number"
              id="codigo"
              name="codigo"
              value={codigo}
              onChange={(event) => setCodigo(event.target.value)}
            />
            <Label htmlFor="nome">Nome</Label>
            <Input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            <Label htmlFor="preco">Preço</Label>
            <Input
              type="text"
              id="preco"
              name="preco"
              value={preco}
              onChange={(event) => setPreco(event.target.value)}
            />
            <Label htmlFor="descricao">Descrição</Label>
            <Textarea
              id="descricao"
              name="descricao"
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
            >
              {descricao}
            </Textarea>
            <Button type="submit">Cadastrar</Button>
          </Formulario>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalEdit;
