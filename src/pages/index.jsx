import { Switch, Route } from 'react-router-dom';
import EditEmployee from './Editemployee';
import EmployeeSignUp from './Employeesignup';
import Guest from './Guest';
import Home from './Home';
import Login from './Login';
import NewEmployee from './Newemployee';
import UserPanel from './Userpanel';

const AppPages = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/login" component={Login} />
      <Route path="/guest" component={Guest} />
      <Route path="/employeesignup/:employee_id" component={EmployeeSignUp} />
      <Route path="/home" component={UserPanel} />
      <Route path="/newemployee" component={NewEmployee} />
      <Route path="/editemployee/:employee_id" component={EditEmployee} />
    </Switch>
  );
};

export default AppPages;
