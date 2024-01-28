import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList.js";
import BlogPostInstance from "./components/BlogPost.js";
import Map from "./components/Map.js";
import StreetInstance from "./components/Street.js";
import AboutPage from "./components/staticPages/About.js";
import ContactPage from "./components/staticPages/Contact.js";
import FaqPage from "./components/staticPages/FAQ.js";
import ImpressumDatenschutzPage from "./components/staticPages/ImpressumDatenschutz.js";
import TagList from "./components/TagList.js";
import TagInstance from "./components/Tag.js";

export default function App() {

      return (

          <main className="text-indigo-800 bg-[#FFFFFF] body-font min-h-screen flex items-center justify-center font-serif">

            <Router>
              <Routes>

                <Route path="/" element={<Map/>}/>

                <Route path="/streets/:street_slug" element={<StreetInstance/>}/>
                <Route path="/tags" element={<TagList/>}/>
                <Route path="/tags/:slug" element={<TagInstance/>}/>
                <Route path="/news" element={<BlogList/>}/>
                <Route path="/news/:slug" element={<BlogPostInstance/>}/>

                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/faq" element={<FaqPage/>}/>
                <Route path="/impressum" element={<ImpressumDatenschutzPage/>}/>

              </Routes>
            </Router>
              
          </main>

      )
};
