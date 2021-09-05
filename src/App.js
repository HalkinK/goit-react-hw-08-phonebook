import { Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import HomeView from "./views/HomeView";
import AppBar from "./components/AppBar/AppBar";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import ContactsView from "./views/ContactsView";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import * as userOperations from "./redux/operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Switch>
        <PublicRoute path="/" exact component={HomeView} />
        <PublicRoute
          path="/register"
          component={RegisterView}
          restricted
          redirectTo="/contacts"
        />
        <PublicRoute
          path="/login"
          component={LoginView}
          restricted
          redirectTo="/contacts"
        />
        <PrivateRoute
          path="/contacts"
          component={ContactsView}
          redirectTo="/login"
        />
      </Switch>
    </Container>
  );
}

export default App;
