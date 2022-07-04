import { Outlet } from 'react-router-dom';

import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import styles from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Header />
      <main className={ styles.main }>
        <SideMenu />
        <Outlet />
      </main>
      
    </div>
  );
}

export default Dashboard;