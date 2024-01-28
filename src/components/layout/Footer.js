import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
  
    <footer class="bg-[#F0FEFF] rounded-lg shadow m-4">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center">
          © Rosamund Mather {(new Date().getFullYear())} unless stated otherwise.
        </span>
        <ul class="flex flex-wrap mt-3 text-sm font-medium text-gray-500 sm:mt-0">
        <li>
            <Link to="/" class="mr-4 hover:underline md:mr-6">
              Home
            </Link>
        </li>
          <li>
            <Link to="/about" class="mr-4 hover:underline md:mr-6">
              About
            </Link>
          </li>
          <li>
            <Link to="/faq" class="mr-4 hover:underline md:mr-6">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/news" class="mr-4 hover:underline md:mr-6">
              News
            </Link>
          </li>
          <li>
            <Link to="/contact" class="mr-4 hover:underline md:mr-6">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/impressum" class="mr-4 hover:underline md:mr-6">
              Impressum
            </Link>
          </li>
      </ul>
      </div>
  </footer>

 )
}

export default Footer;