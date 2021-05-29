import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "src/screens/home";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}