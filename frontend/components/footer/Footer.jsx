import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-center w-full h-24 border-t border-gray-700 bg-monaco-dark">
        <a
          className="flex items-center justify-center"
          href="https://www.lib.rmit.edu.au/easy-cite/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mr-2 text-gray-500">
            You data is safe with us. We handle your requests inside this browser, thus no data shall leave this device.
          </span>
        </a>
      </footer>
    </>
  );
};

export default Footer;
