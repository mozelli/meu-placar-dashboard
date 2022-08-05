import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
// Protected Routes
import Protected from './Protected';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import CampeonatoBrasileiro from './pages/CampeonatoBrasileiro';
import Tools from './pages/Tools';
import Users from './pages/Users';

import { AuthProvider } from './contexts/AuthContext';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/dashboard' element=
            {
              <Protected>
                <Dashboard />
              </Protected>
            }
          >
            <Route index element={<Home />} />
            <Route path="/campeonato-brasileiro" element={<CampeonatoBrasileiro />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/users" element={<Users />} />
            <Route path='/add-new-user' element={<SignUp />} />
          </Route>
        </Routes>  
      </AuthProvider>
    </Router>
  )
}

export default App;
