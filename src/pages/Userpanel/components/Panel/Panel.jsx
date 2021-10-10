import React from 'react';
import { useRouteMatch, NavLink, Switch, Route } from 'react-router-dom';
import Employees from '../../../Employees';
import Info from '../../../Info';
import Owners from '../../../Owners';
import Pets from '../../../Pets';
import Schedule from '../../../Schedule';
import './Panel.css';

const Panel = () => {
  const [greeting, setGreeting] = React.useState('');

  React.useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('¡Buenos días!');
    } else if (currentHour < 18) {
      setGreeting('¡Buenas tardes!');
    } else {
      setGreeting('¡Buenas noches!');
    }
  }, []);

  const { path, url } = useRouteMatch();
  return (
    <section className="panel-container">
      <div className="panel-header">
        <h2 className="panel-header-title">{greeting}</h2>
        <p className="panel-header-description">Este es tu panel de administración</p>
      </div>
      <div className="panel-body">
        <ul className="panel-link-list">
          <li className="panel-link-item">
            <NavLink to={`${url}`} className="panel-link" activeClassName="panel-link-active" exact={true}>
              Inicio
            </NavLink>
          </li>
          <li className="panel-link-item">
            <NavLink to={`${url}/employees`} className="panel-link" activeClassName="panel-link-active">
              Empleados
            </NavLink>
          </li>
          <li className="panel-link-item">
            <NavLink to={`${url}/pets`} className="panel-link" activeClassName="panel-link-active">
              Mascotas
            </NavLink>
          </li>
          <li className="panel-link-item">
            <NavLink to={`${url}/owners`} className="panel-link" activeClassName="panel-link-active">
              Propietarios
            </NavLink>
          </li>
          <li className="panel-link-item">
            <NavLink to={`${url}/schedule`} className="panel-link" activeClassName="panel-link-active">
              Agendamientos
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path={path} exact={true} component={Info} />
          <Route path={`${path}/employees`} component={Employees} />
          <Route path={`${path}/pets`} component={Pets} />
          <Route path={`${path}/owners`} component={Owners} />
          <Route path={`${path}/schedule`} component={Schedule} />
        </Switch>
      </div>
    </section>
  );
};

export default Panel;
