import { BrowserRouter as Router } from 'react-router-dom';
import AppPages from './pages';

const App = () => {
  return (
    <Router>
      <AppPages />
    </Router>
  );
};

export default App;
