import React from "react";

import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";

import ottomanGif from '../assets/OTTOMANS.gif';
import Wars from "../components/sections/Wars";

export default function Landing({title, subtitle, image}) {
  return (
    <LandingLayout>
      <Hero
        title={title}
        subtitle={subtitle}
        image={image}
        ctaText=""
      />
    </LandingLayout>
  );
}
