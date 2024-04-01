"use client";

import { useRouter } from "next/navigation";
import React from "react";

function Navbar({ appTitle }) {
  const router = useRouter();

  return (
    <header className=" bg-white py-5 flex items-center px-5 space-x-4">
      <button type="button" onClick={() => router.back()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z"
          />
        </svg>
      </button>

      <h3 className="font-semibold  uppercase">{appTitle}</h3>
    </header>
  );
}

export default Navbar;
