import {Link} from 'react-router-dom';
import styles from './sidemenu.module.scss';

const SideMenu = () => {
  return (
    <nav className={ styles.sideMenu }>
      <ul>
        <Link to="/dashboard">
          <li>
            Home
          </li>
        </Link>
        <Link to="/dashboard/table">
          <li>
            Tabela de Classificação
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default SideMenu;