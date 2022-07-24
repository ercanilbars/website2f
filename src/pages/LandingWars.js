import React from "react";

import LandingLayout from "../components/layouts/LandingLayout";

import ottomanGif from '../assets/OttomanMap.gif';
import Wars from "../components/sections/Wars";

export default function LandingWars() {
  return (
    <LandingLayout>
      <Wars
        title="The World Wars"
        subtitle="
        The Ottoman empire was established in 1299. take over the empire
        and conquer the whole world. In the process, you can get high lucrative rewards.
        Rewards are calculated based on your combat strength and what level you choose to fight at.
        The stronger you are, the higher the rewards you can earn.
        If you win in country battles, you will get rewards with AKCE tokens.
        Please check out the whitepaper V1 for more information."
        image={ottomanGif}
        ctaText="WhitepaperV1"
        ctaLink={"http://whitepaper.theottomansnft.com"}
      />
      </LandingLayout>
  );
}
