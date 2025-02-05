import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.js';
import Navbar from "./Components/Navbar.js";
import './App.css';
import Contactus from './Pages/Contactus.js';
import Aboutus from './Pages/Aboutus.js';
import Logout from './Pages/Logout.js';
import Login from './Pages/Login.js';
import Register from './Pages/Register.js';
import Blogs from './Pages/Blogs.js';
import MyBlogs from './Pages/UserBlogs.js';
import CreateBlog from './Pages/CreateBlog.js';
import EditBlog from './Pages/EditBlog.js';
import { Toaster } from 'react-hot-toast';
import BlogDetail from './Pages/BlogDetails.js';
import Baner from './Pages/Baner.js';
import Footer from './Components/Footer.js';


export default function App() {
  return (
    <>
      <Navbar />
      <Baner />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/my-blogs" element={<MyBlogs />} />
        <Route path="/create-blogs" element={<CreateBlog />} />
        <Route path="/edit-blog/:id" element={<EditBlog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/:id" element={<BlogDetail />} />
        <Route path="/contactus" element={<Contactus />} /> {/* Lowercase path for consistency */}
        <Route path="/Aboutus" element={<Aboutus/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Logout" element={<Logout/>} />
        {/* <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/new-article" element={<NewArticle />} /> */}
        {/* Optional 404 Page */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
      <Footer/>
     {/* <BlogCard /> */}
    </>
  );
}


