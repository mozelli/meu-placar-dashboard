
import { Outlet } from 'react-router-dom';

import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import UsersProvider from '../../contexts/UsersContext';

const Dashboard = () => {

  return (
    <UsersProvider>
      <Header />
      <main className='container-fluid'>
        <div className="row">
          <div className="col-3">
            <SideMenu />
          </div>
          <div className="col-9">
            <Outlet />
            <footer className='mt-5'>
              <p className='text-center fs-6'>Desenvolvido por <a href="#" className='text-decoration-none'>João Mozelli Neto</a>.</p>
              <p className='text-center'>Todos os direitos reservados. &copy;2022</p>
            </footer>
          </div>
        </div>
      </main> 
      </UsersProvider>
  );
}

export default Dashboard;