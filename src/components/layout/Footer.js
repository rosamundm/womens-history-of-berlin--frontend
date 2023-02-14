import React, { Component } from "react";

function Footer() {
  return (
    <footer class="text-center lg:text-left">
      <div class="container p-6 text-blue-700 bg-white">
        <div class="grid lg:grid-cols-2 gap-4">
          <div className="contact-copyright" class="py-10 font-sans text-center fixed bottom-0">
            © Rosamund Mather {(new Date().getFullYear())}
          </div>
        </div>
      </div>
    </footer>
 )
}

export default Footer;