import styles from './header.module.scss';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <div className={ styles.header }>
      <div className={styles.logo}>
        <img src={ logo } alt="Logo Meu Placar - Bolão Online" />
      </div>
    </div>
  );
}

export default Header;