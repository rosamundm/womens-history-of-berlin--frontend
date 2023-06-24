import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DistrictBrowser from "./components/DistrictBrowser.js";
import DistrictInstance from "./components/District.js";
import StreetInstance from "./components/Street.js";
import HomePage from "./components/Home.js";
import AboutPage from "./components/staticPages/About.js";
import ContactPage from "./components/staticPages/Contact.js";
import FaqPage from "./components/staticPages/FAQ.js";
import ImpressumDatenschutzPage from "./components/staticPages/ImpressumDatenschutz.js";
import PhotoCreditsPage from "./components/staticPages/PhotoCredits.js";

export default function App() {

      // comment for test commit

      return (

          <main className="text-indigo-800 bg-[#D0F8FC] body-font min-h-screen flex items-center justify-center font-serif">

            <Router>
              <Routes>

                <Route path="/" element={<HomePage/>}/>

                <Route path="/districts" element={<DistrictBrowser/>}/>
                <Route path="/districts/:district_slug" element={<DistrictInstance/>}/>
                <Route path="/streets/:street_slug" element={<StreetInstance/>}/>

                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/faq" element={<FaqPage/>}/>
                <Route path="/impressum" element={<ImpressumDatenschutzPage/>}/>
                <Route path="/credits" element={<PhotoCreditsPage/>}/>

              </Routes>
            </Router>
              
          </main>

      )
};
