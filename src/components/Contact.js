import React from "react";

import linkedin from "../Assets/linkedinlogo.png";
import github from "../Assets/github.png";
import twitter from "../Assets/twitterlogo.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div
        className="bg-black py-12  text-white contact border-t border-gray-800 p-4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.93)), url( https://images.unsplash.com/photo-1493401415972-d4001c9fa2aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "sticky",
          top: 0,
        }}
      >
        <div className="p-18 ">
          <div className="contact-title text-center">
            <h2 class="text-3xl p-6 font-bold tracking-tight text-white-900 sm:text-4xl">
              Get in touch !
            </h2>
          </div>
          <div className="flex justify-around ">
            <div className="p-6 sm:mx-40">
              <p className="text-white font-Montserrat font-normal text-2xl text-center sm:mx-40">
                Want to know my journey or would like to chat with me, feel free
                to contact.
              </p>
              <div className="flex justify-center p-4 items-center mt-4">
                <Link
                  to="https://www.linkedin.com/in/nitesh-chowdhary-004327249/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="w-12 h-12 rounded-full mr-8"
                  />
                </Link>
                <Link
                  to="https://github.com/nitesh-github143"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={github}
                    alt="GitHub"
                    className="w-12 h-12 rounded-full mr-8"
                  />
                </Link>
                <Link
                  to="https://twitter.com/Niteshtwt143"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twitter}
                    alt="Twitter"
                    className="w-12 h-12 rounded-full"
                  />
                </Link>
              </div>
              <p className="text-white font-Montserrat font-normal text-lg text-center mt-4">
                You can also reach me at:{" "}
                <span className="text-yellow-300">+91 8653255256</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
