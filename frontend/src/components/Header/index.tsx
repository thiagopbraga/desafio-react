import { Container, Title } from "./styles";

function Header() {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        height: "50px",
        backgroundColor: "#282c34",
        color: "#fff",
      }}
    >
      <Title>Desafio React Jr</Title>
      <Title>Server Softwares</Title>
    </Container>
  );
}

export default Header;
