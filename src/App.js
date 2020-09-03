import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Blog from "./Components/Blog";
// import BlogPost from "./Components/BlogPost";
import Contact from "./Components/Contact";
import EditBlogPost from "./Components/EditBlogPost";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NewBlogPost from "./Components/NewBlogPost";

function App() {
  return (
    <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/Blog" exact component={Blog} />
        <Route path="/EditBlogPost" exact component={EditBlogPost} />
        <Route path="/NewBlogPost" exact component={NewBlogPost} />
    </Router>
  );
}

export default App;
