import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ROUTES } from "./constants/routes";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<h2>loading</h2>}>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
