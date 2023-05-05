import { GlobalStyles } from "./styles/GlobalStyles";

import Header from "./components/Header";
import ListProducts from "./components/ListProducts";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <ListProducts />
    </>
  );
}
