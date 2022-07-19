import Router from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';

import UsersProvider from './contexts/users';

function App() {

  return (
    <UsersProvider>
      <Router />
    </UsersProvider>
  )
}

export default App
