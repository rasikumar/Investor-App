import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { ChartRadialLabel } from "@/components/chart-radial";
import WelcomeMessage from "@/components/welcome-message";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 pt-0">
      <WelcomeMessage />
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted/50 border-primary border animate-pulse aspect-video rounded-xl" />
        <div className="bg-muted/50 border-primary border animate-pulse aspect-video rounded-xl" />
        <div className="bg-muted/50 border-primary border animate-pulse aspect-video rounded-xl" />
      </div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-2">
        <ChartRadialLabel />
        <ChartAreaInteractive />
      </div>
    </div>
  );
};

export default Home;
