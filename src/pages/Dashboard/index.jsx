import { Outlet } from 'react-router-dom';

import BrasileiroChampionshipProvider from '../../contexts/brasileiroChampionship';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';

const Dashboard = () => {
  
  console.log("[Component: Dashboard]");

  return (
      <div>
        <Header />
        <main className='container-fluid'>
          <div className="row">
            <div className="col-3">
              <SideMenu />
            </div>
            <div className="col-9">
              <BrasileiroChampionshipProvider>
                <Outlet />
              </BrasileiroChampionshipProvider>
              <footer className='mt-5'>
                <p className='text-center fs-6'>Desenvolvido por <a href="#" className='text-decoration-none'>João Mozelli Neto</a>.</p>
                <p className='text-center'>Todos os direitos reservados. &copy;2022</p>
              </footer>
            </div>
          </div>
        </main>    
      </div>
  );
}

export default Dashboard;