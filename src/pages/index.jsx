import { Switch, Route } from 'react-router-dom';
import EditEmployee from './Editemployee';
import EditOwner from './Editowner';
import EditPet from './Editpet';
import EditSchedule from './Editshedule';
import EmployeeSignUp from './Employeesignup';
import Guest from './Guest';
import Home from './Home';
import Login from './Login';
import NewEmployee from './Newemployee';
import NewPet from './Newpet';
import NewSchedule from './Newschedule';
import NewOwner from './Newowner';
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
      <Route path="/newowner" component={NewOwner} />
      <Route path="/editowner/:owner_id" component={EditOwner} />
      <Route path="/newpet" component={NewPet} />
      <Route path="/editpet/:pet_id" component={EditPet} />
      <Route path="/newschedule" component={NewSchedule} />
      <Route path="/editschedule/:schedule_id" component={EditSchedule} />
    </Switch>
  );
};

export default AppPages;
