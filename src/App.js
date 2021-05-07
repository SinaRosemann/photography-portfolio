import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Transition, TransitionGroup } from "react-transition-group";
import { play, exit } from "./gsapAnimation/pageAnimation";

// Pages
import Home from "./pages/home";
import Human from "./pages/human";
import FirstLight from "./pages/first light";
import Personal from "./pages/personal";
import Imaginari from "./pages/imaginari";
import Stage from "./pages/on stage";
import Night from "./pages/night";
import Contact from "./pages/contact";
import About from "./pages/about";
import NotFound from "./pages/404";

function App() {
  return (
    <Router>
      <div className="container">
        <Route
          render={({ location }) => {
            const { pathname, key } = location;

            return (
              <>
                <TransitionGroup component={null}>
                  <Transition
                    key={key}
                    appear={true}
                    onEnter={(node, appears) => play(pathname, node, appears)}
                    onExited={(node, appears) => exit(node, appears)}
                    timeout={{ enter: 1750, exit: 100 }}
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Home} />
                      <Route path="/human" component={Human} />
                      <Route path="/first-light" component={FirstLight} />
                      <Route path="/personal" component={Personal} />
                      <Route path="/imaginari" component={Imaginari} />
                      <Route path="/night" component={Night} />
                      <Route path="/on-stage" component={Stage} />
                      <Route path="/contact" component={Contact} />
                      <Route path="/about" component={About} />
                      <Route path="/404" component={NotFound} />
                      <Redirect to="/404" />
                    </Switch>

                  </Transition>
                </TransitionGroup>
              </>
            );
          }}
        />
      </div>
    </Router>
  );
}

export default App;
