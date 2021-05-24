import { Login, Dashboard, Error, PrivateRoute, AuthWrapper } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/main.scss";
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact={true}>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login" component={Login}></Route>
          <Route path="*" component={Error}></Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
