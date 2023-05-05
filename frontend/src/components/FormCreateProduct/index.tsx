import React from "react";

import { useRef } from "react";

import styled from "styled-components";

function FormCreateProduct({onClose}: {onClose: () => void}) {
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

    
  };

  return (
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
  );
}

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
    background-color: #fff;
    color: #000;
  }
`;

export default FormCreateProduct;
