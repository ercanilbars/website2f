import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import LandingWars from './pages/LandingWars';
import ottomanGif from './assets/OTTOMANS.gif';
import ottomanMap from './assets/OttomanMap.gif';
import warrior from './assets/Warrior.png';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing 
          title='The Ottomans NFT'
          subtitle='5555 The Ottomans returned again to conquer Opensea. Join us, and enjoy your winning'
          image={ottomanGif}
          />
        </Route>
        <Route  path="/ottoman-wars">
        <LandingWars
          />
        </Route>
        <Route  path="/roadmap">
        <Landing 
          title="The Roadmap"
          subtitle="
          The Ottoman empire was established in 1299. take over the empire
          and conquer the whole world. In the process, you can get high lucrative rewards.
          Rewards are calculated based on your combat strength and what level you choose to fight at.
          The stronger you are, the higher the rewards you can earn.
          If you win in country battles, you will get rewards with AKCE tokens."
          image={warrior}
          />
        </Route>
      </Switch>
    </Router>
  );
}