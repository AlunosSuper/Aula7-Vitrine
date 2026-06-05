import { BrowserRouter, Routes, Route } from "react-router-dom"
import Vitrine from "./pages/Vitrine"
import Produto from "./pages/Produto"

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Vitrine/> }/>
        
        {/*  ROTA TEMPORÁRIA PARA TESTAR */}
        <Route path="/produto/:codigo" element={<Produto />} />

      </Routes>
    </BrowserRouter>
  )
}
