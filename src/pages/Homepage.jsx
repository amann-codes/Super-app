import React from "react";
import ProfileCard from "../components/ProfileCard";
import WeatherCard from "../components/WeatherCard";
import NewsCard from "../components/NewsCard";
import Notes from "../components/Notes";
import Timer from "../components/Timer";

export default function Homepage() {
  return (
    <div className="w-screen h-screen py-3 px-5 bg-black">
      <div className="flex flex-row gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-4">
            <ProfileCard />
            <WeatherCard />
          </div>
          <Notes />
        </div>
        <Timer />
      </div>
      <NewsCard/>
      </div>
    </div>
  );
}
