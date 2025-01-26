"use client";

import { useEffect } from "react";
import ReactGA from "react-ga4";

const AnalyticsProvider = () => {
  useEffect(() => {
    ReactGA.initialize("G-R7S7TQ8MN5");
    ReactGA.send("pageview");
  }, []);

  return null;
};

export default AnalyticsProvider;
