import UsersProvider from './contexts/UsersContext';

import Router from './Router';
import TablesProvider from './contexts/TablesContext';
import MatchesProvider from './contexts/MatchesContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <UsersProvider>
      <TablesProvider>
        <MatchesProvider>
          <Router />
        </MatchesProvider>
      </TablesProvider>
    </UsersProvider>
  )
}

export default App;
