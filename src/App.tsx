import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ROUTES } from "./constants/routes";

const Home = lazy(() => import("./pages/Home"));
const Favorites = lazy(() => import("./pages/Favorites"));
const Detail = lazy(() => import("./pages/Detail"));

function App() {
  return (
    <Router>
      <Suspense fallback={<h2>loading</h2>}>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.FAVORITES} component={Favorites} />
          <Route exact path={ROUTES.DETAIL} component={Detail} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
