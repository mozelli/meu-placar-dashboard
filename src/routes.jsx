import { Route, Routes, BrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Home from './pages/Home';
import CampeonatoBrasileiro from "./pages/CampeonatoBrasileiro";
import TableSerieA from "./pages/TableSerieA";
import TableSerieB from "./pages/TableSerieB";
import RoundsSerieA from "./pages/RoundsSerieA";
import RoundsSerieB from "./pages/RoundSerieB";
import Tools from "./pages/Tools";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={ <Dashboard /> }>
          <Route index element={<Home />} />
          <Route path="campeonato-brasileiro" element={<CampeonatoBrasileiro />} />
          <Route path="tabela-serie-a" element={<TableSerieA />} />
          <Route path="tabela-serie-b" element={<TableSerieB />} />
          <Route path="jogos-da-rodada-serie-a" element={<RoundsSerieA />} />
          <Route path="jogos-da-rodada-serie-b" element={<RoundsSerieB />} />
          <Route path="ferramentas" element={<Tools />}>
            
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;