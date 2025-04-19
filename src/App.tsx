import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogPostInstance from "./components/BlogPost";
import StreetInstance from "./components/Street";

import TagList from "./components/TagList";
import TagInstance from "./components/Tag";
import Homepage from "./components/layout/Homepage";

import PageInstance from "./components/Page";

// comment to trigger deploy

const App: FC = () => {
  return (
    <h1>This site is temporarily closed for technical maintenance. Thanks for visiting and please check back again soon!</h1>
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<Homepage />} />
    //       <Route path="/streets/:street_slug" element={<StreetInstance />} />
    //       <Route path="/tags" element={<TagList />} />
    //       <Route path="/tags/:slug" element={<TagInstance />} />
    //       <Route path="/news" element={<BlogList />} />
    //       <Route path="/news/:slug" element={<BlogPostInstance />} />
    //       <Route path="/:slug" element={<PageInstance />} />
    //     </Routes>
    //   </Router>
  );
}

export default App;