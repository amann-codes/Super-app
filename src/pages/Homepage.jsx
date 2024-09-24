import React from "react";
import ProfileCard from "../components/ProfileCard";
import WeatherCard from "../components/WeatherCard";
import NewsCard from "../components/NewsCard";
import Notes from "../components/Notes";

export default function Homepage() {
  return (
    <div className="flex flex-row w-screen h-screen bg-black p-5 gap-3">
      <div className="flex flex-row gap-3">
        <div className="flex flex-col gap-3">
          <ProfileCard />
          <WeatherCard />
        </div>
        <Notes/>
      </div>
        <NewsCard/>
    </div>
  );
}
