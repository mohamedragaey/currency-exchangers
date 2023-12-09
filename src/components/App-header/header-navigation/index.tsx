"use client";
import React from "react";

const HeaderNavigation: React.FC = () => {
  return (
    <nav
      aria-labelledby="Header Navigation"
      className="flex list-none items-center gap-4"
    >
      <li>
        <a href="/" className="btn btn-default rounded">
          EUR-USD Details
        </a>
      </li>
      <li>
        <a href="/" className="btn btn-default rounded">
          EUR-GBP Details
        </a>
      </li>
    </nav>
  );
};

export default HeaderNavigation;
