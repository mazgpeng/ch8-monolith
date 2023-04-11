import { Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loading } from "../components";

const Home = lazy(() => import("../views/Home"));
const Dashboard = lazy(() => import("../views/Dashboard"));

const Routing = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Suspense>
);

export default Routing;
