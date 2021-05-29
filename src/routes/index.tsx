import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Favorites } from "src/screens/favorites";
import { Home } from "src/screens/home";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/favorites" component={Favorites}/>
      </Switch>
    </BrowserRouter>
  )
}