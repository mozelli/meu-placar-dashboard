import { Outlet } from 'react-router-dom';
import BrasileiroChampionshipProvider from '../../contexts/brasileiroChampionship';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import styles from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <BrasileiroChampionshipProvider>
      <div className={styles.dashboard}>
        <Header />
        <main className={ styles.main }>
          <SideMenu />
          <Outlet />
        </main>    
      </div>
    </BrasileiroChampionshipProvider>
  );
}

export default Dashboard;