import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Protected from './Protected';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import CampeonatoBrasileiro from './pages/CampeonatoBrasileiro';
import TableSerieA from './pages/TableSerieA';
import RoundsSerieA from './pages/RoundsSerieA';
import TableSerieB from './pages/TableSerieB';
import RoundsSerieB from './pages/RoundsSerieB';
import Users from './pages/Users';
import Tools from './pages/Tools';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Protected><Dashboard /></Protected>}>
            <Route index element={<Home />} />
            <Route path="campeonato-brasileiro" element={<CampeonatoBrasileiro />} />
            <Route path="campeonato-brasileiro/tabela-serie-a" element={<TableSerieA />} />
            <Route path="campeonato-brasileiro/jogos-da-rodada-serie-a" element={<RoundsSerieA />} />
            <Route path="campeonato-brasileiro/tabela-serie-b" element={<TableSerieB />} />
            <Route path="campeonato-brasileiro/jogos-da-rodada-serie-b" element={<RoundsSerieB />} />
            <Route path='tools' element={<Tools />} />
            <Route path="users" element={<Users />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}