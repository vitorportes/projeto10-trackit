import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaInicial from "./TelaInicial";
import Cadastro from "./Cadastro";
import Habitos from "./Habitos";
import Historico from "./Historico";
import Hoje from "./Hoje";

export default function App() {
  return (
    <BrowserRouter>
      <h1>header</h1>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/habitos" element={<Habitos />} />
        <Route path="/hoje" element={<Historico />} />
        <Route path="/historico" element={<Hoje />} />
      </Routes>
    </BrowserRouter>
  );
}
