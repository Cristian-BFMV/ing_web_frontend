import Panel from '../Panel/Panel';
import SideBar from '../Sidebar/Sidebar';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout-container">
      <SideBar />
      <Panel />
    </div>
  );
};

export default Layout;
