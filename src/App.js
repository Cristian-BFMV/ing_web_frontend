import { BrowserRouter as Router } from 'react-router-dom';
import AppPages from './pages';
import ContextProvider from './context';

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <AppPages />
      </Router>
    </ContextProvider>
  );
};

export default App;
