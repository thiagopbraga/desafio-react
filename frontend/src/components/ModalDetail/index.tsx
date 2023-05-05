import { Product } from "../../types/Product";
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalBody,
  ButtonClose,
} from "./styles";
interface ModalProps {
  visible: boolean;
  product: Product | null;
  onClose: () => void;
}

function ModalDetail({ visible, product, onClose }: ModalProps) {
  if (!visible) {
    return null;
  }

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <h1>{product?.nome}</h1>
          <ButtonClose onClick={onClose}>X</ButtonClose>
        </ModalHeader>
        <ModalBody>
          <h1>Código: {product?.codigo}</h1>
          <h2>Preço: {product?.preco}</h2>
          <p>{product?.descricao}</p>
          <p>{product?.data_criacao}</p>
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  );
}
export default ModalDetail;
