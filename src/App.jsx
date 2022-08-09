import UsersProvider from './contexts/UsersContext';
import TablesProvider from './contexts/TablesContext';
import Router from './Router';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <UsersProvider>
      <TablesProvider>
        <Router />
      </TablesProvider>
    </UsersProvider>
  )
}

export default App;
