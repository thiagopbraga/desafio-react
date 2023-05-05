import { useEffect, useState, Fragment } from "react";
import {
  ButtonAdd,
  ButtonDelete,
  ButtonDetail,
  ButtonEdit,
  Container,
  Table,
  TableBody,
  TableContainer,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  Title,
} from "./styles";
import { Product } from "../../types/Product";
import ModalDetail from "../ModalDetail";
import ModalCreateProduct from "../ModalCreateProduct";
import ModalEdit from "../ModalEdit";

export default function ListProducts() {
  const [products, setProducts] = useState([] as Product[]);
  const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

  function handleOpenModalEdit(product: Product) {
    setIsModalEditOpen(true);
    setSelectedProduct(product);
  }

  function handleCloseModalEdit() {
    setIsModalEditOpen(false);
    setSelectedProduct(null);
  }

  function handleOpenModalDetail(product: Product) {
    setIsModalDetailOpen(true);
    setSelectedProduct(product);
  }

  function handleCloseModalDetail() {
    setIsModalDetailOpen(false);
    setSelectedProduct(null);
  }

  function handleOpenModalCreate() {
    setIsModalCreateOpen(true);
  }

  function handleCloseModalCreate() {
    setIsModalCreateOpen(false);
  }

  function deletar(codigo: string) {
    /* confirm if user want delete */
    if (window.confirm("Deseja realmente excluir este produto?")) {
      fetch("http://localhost:3001/products/" + codigo, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Produto excluído com sucesso!");
          window.location.reload();
        });
    }
  }

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Container>
      <Title>Produtos</Title>
      <ButtonAdd
        onClick={() => {
          handleOpenModalCreate();
        }}
      >
        Adicionar produto
      </ButtonAdd>
      <ModalCreateProduct
        visible={isModalCreateOpen}
        onClose={handleCloseModalCreate}
      />

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>
                <span>Código - Nome</span>
              </TableHeader>
              <TableHeader>
                <span>Descrição</span>
              </TableHeader>
              <TableHeader>Ações</TableHeader>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((product, index) => (
              <Fragment key={index}>
                <ModalDetail
                  visible={isModalDetailOpen}
                  product={selectedProduct}
                  onClose={handleCloseModalDetail}
                />
                <ModalEdit
                  visible={isModalEditOpen}
                  product={selectedProduct}
                  onClose={handleCloseModalEdit}
                />
                <TableRow>
                  <TableData>
                    {product.codigo} - {product.nome}
                  </TableData>
                  <TableData>{product.descricao}</TableData>
                  <TableData>
                    <ButtonEdit
                      onClick={() => {
                        handleOpenModalEdit(product);
                      }}
                    >
                      Editar
                    </ButtonEdit>
                    <ButtonDelete
                      onClick={() => {
                        deletar(product._id);
                      }}
                    >
                      Excluir
                    </ButtonDelete>
                    <ButtonDetail
                      onClick={() => {
                        handleOpenModalDetail(product);
                      }}
                    >
                      Detalhes
                    </ButtonDetail>
                  </TableData>
                </TableRow>
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
