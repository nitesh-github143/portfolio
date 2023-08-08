import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 text-center border-t border-gray-800 ">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} Nitesh Chowdhary. All rights
          reserved.
        </p>
        <div className="mt-2">
          <Link
            to="https://github.com/nitesh-github143"
            className="text-gray-400 hover:text-white mr-4"
          >
            GitHub
          </Link>
          <a
            href="https://www.linkedin.com/in/nitesh-chowdhary-004327249/"
            className="text-gray-400 hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
