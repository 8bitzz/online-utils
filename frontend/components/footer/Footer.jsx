import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://www.lib.rmit.edu.au/easy-cite/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mr-2 text-gray-400">
            You data is safe here.
            We handle your requests inside this browser, thus no data shall leave this device.
          </span>
        </a>
      </footer>
    </>
  );
};

export default Footer;
