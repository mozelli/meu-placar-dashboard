import 'bootstrap/dist/css/bootstrap.min.css';
import UsersProvider from './contexts/UsersContext';
import Router from './Router';

const App = () => {

  return (
    <UsersProvider>
      <Router />
    </UsersProvider>
  )
}

export default App;
