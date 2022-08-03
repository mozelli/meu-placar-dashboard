import Router from './routes';

import UsersProvider from './contexts/users';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <UsersProvider>
      <Router />
    </UsersProvider>
  )
}

export default App
