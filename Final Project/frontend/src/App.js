import { Container } from "react-bootstrap";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import ListUsers from "./components/Form/ListUsers";
import UserDetail from "./components/Form/UserDetail";
import NotFound from "./components/NotFound";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="cover">
        <BrowserRouter>
          <Container>
            <Header />
              <Switch>
                <Route exact path={"/"} component={ListUsers} />
                <Route path="/users/:id" component={UserDetail} />
                <Route path="/404" component={NotFound} />
                <Redirect from="*" to="/404"/>
              </Switch>
            </Container>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
