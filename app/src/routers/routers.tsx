import { Route, Switch } from "react-router-dom";
import { AuthRoutes } from "../constants/routes";
import AdminPanel from "../views/adminPanel/adminPanel";
import Dashboard from "../views/dashboard/dashboard";

const Routers = (): JSX.Element => {
  return (
    <div>
      <Switch>
        <Route exact path={AuthRoutes.dashboard} render={() => <Dashboard />} />
        <Route exact path={AuthRoutes.admin} render={() => <AdminPanel />} />
      </Switch>
    </div>
  );
};

export default Routers;
