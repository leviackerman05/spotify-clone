import React from "react";

export const MainPage = () => {
  return (
    <div style={{}} className="grid grid-cols-6">
      <div className="p-6 bg-black text-white h-screen">
        <img width="130px" src="/svg/spotify.svg" />
        <div className="flex ml-1">
          <h5>Home</h5>
        </div>
        <div className="flex ml-1">
          <h5>Search</h5>
        </div>
        <div className="flex ml-1">
          <h5>Your Library</h5>
        </div>
        <div className="flex ml-1">
          <h5>Create Playlist</h5>
        </div>
        <div className="flex ml-1">
          <h5>Liked Songs</h5>
        </div>
      </div>
      <div className=" col-span-5 w-full">
        <div className="bg-gradient-to-b from-red-900 via-trueGray-900 to-trueGray-900 text-white w-full h-screen">
          <div>
            <h5 className="px-4">
              <span>UPGRADE</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
