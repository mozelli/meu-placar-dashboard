<<<<<<< HEAD
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from "../../contexts/AuthContext";
=======
import { Link } from 'react-router-dom';
>>>>>>> main

import logo from '../../images/logo.png';

const Header = () => {
<<<<<<< HEAD
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogOut() {
    try {
      await logout();
      navigate("/sign-in", {replace: true});
    } catch(error) {
      console.error(error);
    }
  }
=======
>>>>>>> main

  return (
    <nav className="navbar navbar-expand-lg shadow-sm mb-4">
      <div className="container-fluid">
        <Link to="/dashboard" className='navbar-brand'>
          <img src={ logo } alt="Meu Placar - Bolão Online" width={250} />
        </Link>
        <div className="d-flex">
          <span className="navbar-text">
<<<<<<< HEAD
            {currentUser.email}
          </span>
          <button className="btn btn-danger ms-2 d-flex align-items-center" onClick={() => handleLogOut()}>
=======
            Olá!
          </span>
          <button className="btn btn-danger ms-2 d-flex align-items-center">
>>>>>>> main
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="18" height="18" viewBox="0 0 24 24"><path d="M14 12h-4v-12h4v12zm4.213-10.246l-1.213 1.599c2.984 1.732 5 4.955 5 8.647 0 5.514-4.486 10-10 10s-10-4.486-10-10c0-3.692 2.016-6.915 5-8.647l-1.213-1.599c-3.465 2.103-5.787 5.897-5.787 10.246 0 6.627 5.373 12 12 12s12-5.373 12-12c0-4.349-2.322-8.143-5.787-10.246z"/></svg>
            <span className="ms-2">Sair</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;