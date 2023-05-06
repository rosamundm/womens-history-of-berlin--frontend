import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
  
    <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © Rosamund Mather {(new Date().getFullYear())}
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/districts" class="mr-4 hover:underline md:mr-6">
              Districts
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
            <Link to="/contact" class="mr-4 hover:underline md:mr-6">
              Contact
            </Link>
          </li>
      </ul>
      </div>
  </footer>

 )
}

export default Footer;