'use client'

import Link from "next/link";

export default function Header({ bgColor }: { bgColor: string }) {
  return (
    <header
      style={bgColor.includes("rgb") ? { backgroundColor: bgColor } : {}}
      className={`p-4 ${!bgColor.includes("rgb") ? bgColor : ""}`}
    >
      <nav className="flex flex-wrap justify-between items-center max-w-7xl mx-auto">
        <div className="flex lg:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={() => {
              const menu = document.getElementById("mobileMenu");
              menu?.classList.toggle("hidden");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Links */}
        <ul
          id="mobileMenu"
          className="hidden lg:flex flex-col lg:flex-row lg:space-x-8 text-black text-lg font-normal lg:flex-grow lg:justify-center w-full lg:w-auto"
        >
          <li className="border-b lg:border-none">
            <Link href="/" className="hover:text-gray-400 block py-2 lg:py-0">
              Home
            </Link>
          </li>
          <li className="border-b lg:border-none">
            <Link href="/Shop" className="hover:text-gray-400 block py-2 lg:py-0">
              Shop
            </Link>
          </li>
          <li className="border-b lg:border-none">
            <Link href="/About" className="hover:text-gray-400 block py-2 lg:py-0">
              About
            </Link>
          </li>
          <li className="border-b lg:border-none">
            <Link href="/Contact" className="hover:text-gray-400 block py-2 lg:py-0">
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <ul className="flex space-x-12 items-center mt-4 lg:mt-0">
          <li>
            <Link href="/About">
              <img
                src="/icons/Contact.png"
                alt="Contact Icon"
                className="w-6 h-6 hover:opacity-80"
              />
            </Link>
          </li>
          <li>
            <Link href="/Search">
              <img
                src="/icons/Search.png"
                alt="Search Icon"
                className="w-6 h-6 hover:opacity-80"
              />
            </Link>
          </li>
          <li>
            <Link href="/Favorites">
              <img
                src="/icons/Heart.png"
                alt="Favorites Icon"
                className="w-6 h-6 hover:opacity-80"
              />
            </Link>
          </li>
          <li>
            <Link href="/Cart">
              <img
                src="/icons/Cart.png"
                alt="Cart Icon"
                className="w-6 h-6 hover:opacity-80"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
