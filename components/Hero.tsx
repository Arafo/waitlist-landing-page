"use client";

import { useMemo } from "react";
// config
import config from "@/config/general";
// components
import Form from "./Form";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center relative overflow-hidden">      
      <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
        <div className="mb-4">
          <img src="/laptimes-logo.svg" alt="Lap Times Logo" width="48" height="48" />
        </div>
        <h2 className="text-xs uppercase tracking-wider text-white opacity-80 mb-2">LAP TIMES</h2>
        <h1 className="text-4xl md:text-5xl font-medium text-white mb-2">
          Join the waitlist for
          <br />
          <span className="gradient-text">Lap Times</span>
        </h1>
        <Form />
      </div>
      <div className="mt-16 text-xs text-appleGray">
        <p>Coming soon.</p>
      </div>
    </section>
  );
};

export default Hero;