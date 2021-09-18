import { Switch, Route } from 'react-router-dom';
import EmployeeSignUp from './Employeesignup';
import Guest from './Guest';
import Home from './Home';
import Login from './Login';

const AppPages = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/login" component={Login} />
      <Route path="/guest" component={Guest} />
      <Route path="/employeesignup/:employee_id" component={EmployeeSignUp} />
    </Switch>
  );
};

export default AppPages;
