import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Blog from "./Components/Blog";
import BlogPost from "./Components/BlogPost";
import Contact from "./Components/Contact";
import EditBlogPost from "./Components/EditBlogPost";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NewBlogPost from "./Components/NewBlogPost";

function App() {
  return (
    <Router>
      <div>
        hello world
      </div>
    </Router>
  );
}

export default App;
