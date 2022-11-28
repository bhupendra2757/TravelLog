import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Home from '../pages/Home';
import Blog from './Blog/Blog';

function RouteLinks() {
    return (
        <div >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/blog" element={<Blog/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<Signup/>} />
                    {/* <Route path="/AboutUs" element={<Context />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/Blog" element={<Blog />} /> */}
                    {/* <Route path="/booking" element={<Booking />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouteLinks;