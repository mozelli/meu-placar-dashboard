import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm mb-4">
      <div className="container-fluid">
        <Link to="/dashboard" className='navbar-brand'>
          <img src={ logo } alt="Meu Placar - Bolão Online" width={250} />
        </Link>
      </div>
    </nav>
  );
}

export default Header;