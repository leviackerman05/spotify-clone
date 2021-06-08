import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const [color1, setColor1] = useState("white");
  const [color2, setColor2] = useState("white");
  const [color3, setColor3] = useState("white");

  return (
    <div className="bg-black text-white" style = {{ fontFamily : "Helvatica,Arial,sans-serif" }}>
      <div className="flex py-20 px-48">
        <div className="grid grid-cols-4 gap-20 text-left">
          <div>
            <img width="120px" src="/svg/spotify.svg" />
          </div>
          <div className = "text-md tracking-wide">
            <h5 className="p-2 text-gray-400 text-xs font-semibold tracking-wider">COMPANY</h5>
            <h5 className="p-2">
              <span className="hover:text-green-500 inline ">About</span>
            </h5>
            <h5 className="p-2">
              <span className="hover:text-green-500 inline">Jobs</span>
            </h5>
            <h5 className="p-2">
              <span className="hover:text-green-500 inline">
                For the record
              </span>
            </h5>
          </div>
          <div className = "text-md tracking-wide">
            <h5 className="p-2 text-gray-400 text-xs font-semibold tracking-wider">COMMUNITIES</h5>
            <h5 className="p-2">
              <span className="hover:text-green-500 inline">For Artists</span>
            </h5>
            <h5 className="p-2">
              <span className="hover:text-green-500 inline">Developers</span>
            </h5>
            <h5 className="p-2">
              <span className="hover:text-green-500 inline">Advertising</span>
            </h5>
            <h5 className="p-2">
              <span className="hover:text-green-500 inline">Investors</span>
            </h5>
            <h5 className="p-2">
              <span className="hover:text-green-500 inline">Vendors</span>
            </h5>
          </div>
          <div className = "text-md tracking-wide">
            <h5 className="p-2 text-gray-400 text-xs font-semibold tracking-wider">USEFUL LINKS</h5>
            <h5 className="p-2">
              <span className="hover:text-green-500 inline">Support</span>
            </h5>
            <h5 className="p-2">
              <span className="hover:text-green-500 inline">Web Player</span>
            </h5>
            <h5 className="p-2">
              <span className="hover:text-green-500 inline">
                Free Mobile App
              </span>
            </h5>
          </div>
        </div>
        <div className="flex flex-1 ml-auto justify-end">
          <div className="flex justify-between w-1/2">
            <div
              className="bg-warmGray-800 rounded-full p-4 self-start"
              onMouseEnter={() => {
                setColor1("#1dd760");
              }}
              onMouseLeave={() => {
                setColor1("white");
              }}
            >
              <FontAwesomeIcon icon={faInstagram} color={color1} size="lg" />
            </div>
            <div
              className="bg-warmGray-800 rounded-full p-4 px-4 self-start"
              onMouseEnter={() => {
                setColor2("#1dd760");
              }}
              onMouseLeave={() => {
                setColor2("white");
              }}
            >
              <FontAwesomeIcon icon={faTwitter} color={color2} size="lg" />
            </div>
            <div
              className="bg-warmGray-800 rounded-full p-4 px-5 self-start"
              onMouseEnter={() => {
                setColor3("#1dd760");
              }}
              onMouseLeave={() => {
                setColor3("white");
              }}
            >
              <FontAwesomeIcon icon={faFacebookF} color={color3} size="lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black flex px-48 flex pb-16">
        <div style = {{ fontSize : "0.7rem" }} className = "text-gray-400">
          <span className="hover:text-green-500 inline py-10">Legal</span>
          <span className="hover:text-green-500 inline ml-10 py-10">
            Privacy Center
          </span>
          <span className="hover:text-green-500 inline ml-10 py-10">
            Privacy Policy
          </span>
          <span className="hover:text-green-500 inline ml-10 py-10">
            Cookies
          </span>
          <span className="hover:text-green-500 inline ml-10 py-10">
            About Ads
          </span>
          <span className="hover:text-green-500 inline ml-10 py-10">
            Additional CA Privacy Disclosures
          </span>
        </div>
        <div style = {{ fontSize : "0.7rem" }} className = "text-right text-gray-400 flex-1">
          <h5><span className = "hover:text-green-500 inline">USA</span></h5>
          <h5>© 2021 Spotify AB</h5>
        </div>
      </div>
    </div>
  );
};
