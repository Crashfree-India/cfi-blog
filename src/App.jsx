import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import BlogPage from "./components/BlogPage";
import BlogStoryPage from "./components/BlogStoryPage";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<BlogPage />}></Route>
        <Route path="/blog/:slug" element={<BlogStoryPage />} />

      </Routes>
    </Router>
  );
}

export default App;
