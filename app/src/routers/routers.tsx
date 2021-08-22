import { Route, Switch } from "react-router-dom";
import { AuthRoutes } from "../constants/routes";
import Dashboard from "../views/dashboard/dashboard";

const Routers = (): JSX.Element => {
  return (
    <div>
      <Switch>
        <Route exact path={AuthRoutes.dashboard} render={() => <Dashboard />} />
      </Switch>
    </div>
  );
};

export default Routers;
