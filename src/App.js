import "./App.css";
import Layout from "./components/layout/Layout";
import { Route, Switch } from "react-router-dom";
import Cocktails from "./components/cocktails/Cocktails";
import Details from "./components/details/Details";
import NotFound from "./components/ui/NotFound";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path={"/"} exact>
            <Cocktails />
          </Route>
          <Route path={"/About"}>
            <p> About Us</p>
          </Route>
          <Route path={"/details/:cocktailId"}>
            <Details />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
