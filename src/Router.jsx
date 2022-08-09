import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Users from './pages/Users';
import Protected from './Protected';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Protected><Dashboard /></Protected>}>
            <Route index element={<Home />} />
            <Route path="users" element={<Users />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}