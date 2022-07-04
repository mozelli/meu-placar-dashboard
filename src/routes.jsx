import { Route, Routes, BrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Home from './pages/Home';
import Table from "./pages/Table";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={ <Dashboard /> }>
          <Route index element={<Home />} />
          <Route path="table" element={<Table />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;