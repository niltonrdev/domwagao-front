import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignInPage from "./pages/LoginPage/SignInPage"
import HomePage from "./pages/HomePage/HomePage"
import CaixaPage from "./pages/CaixaPage/CaixaPage"
import ComandaPage from "./pages/ComandaPage/ComandaPage"
import EstoquePage from "./pages/EstoquePage/EstoquePage"
import ControleGastosPage from "./pages/ControlePage/ControleGastosPage"
import ServicosPage from "./pages/ServicosPage/ServicosPage"
import EditProduct from "./pages/EstoquePage/EditaProduto"
import CreateProduct from "./pages/EstoquePage/AdicionarProduto"
import CreateBuy from "./pages/EstoquePage/AdicionarCompra"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<SignInPage />} />
        <Route path={'/home'} element={<HomePage />} />
        <Route path={'/caixa'} element={<CaixaPage />} />
        <Route path={'/comanda'} element={<ComandaPage />} />
        <Route path={'/controle'} element={<ControleGastosPage />} />
        <Route path={'/servicos'} element={<ServicosPage />} />
        <Route path={'/estoque'} element={<EstoquePage />} />
        <Route path={'/estoque/:id'} element={<EditProduct />} />
        <Route path={'/estoque/adicionar'} element={<CreateProduct />} />
        <Route path={'/estoque/novacompra'} element={<CreateBuy />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
