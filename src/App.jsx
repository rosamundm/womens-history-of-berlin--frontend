import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList.jsx";
import BlogPostInstance from "./components/BlogPost.jsx";
import StreetInstance from "./components/Street.jsx";
import AboutPage from "./components/staticPages/About.jsx";
import ContactPage from "./components/staticPages/Contact.jsx";
import FaqPage from "./components/staticPages/FAQ.jsx";
// import ImpressumDatenschutzPage from "./components/staticPages/ImpressumDatenschutz.js";
import TagList from "./components/TagList.jsx";
import TagInstance from "./components/Tag.jsx";
import Homepage from "./components/layout/Homepage.jsx";

export default function App() {
  return (
    <main className="text-indigo-800 bg-[#FFFFFF] body-font min-h-screen flex items-center justify-center font-serif">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/streets/:street_slug" element={<StreetInstance />} />
          <Route path="/tags" element={<TagList />} />
          <Route path="/tags/:slug" element={<TagInstance />} />
          <Route path="/news" element={<BlogList />} />
          <Route path="/news/:slug" element={<BlogPostInstance />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          {/* <Route path="/impressum" element={<ImpressumDatenschutzPage />} /> */}
        </Routes>
      </Router>
    </main>
  );
}
