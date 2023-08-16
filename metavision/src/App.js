import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';


const Loading = lazy(() => import('./Components/Loading'));
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Review = lazy(() => import('./Pages/Review'));
const Contact = lazy(() => import('./Pages/Contact'));
const Blog = lazy(() => import('./Pages/Blog'));
const Product = lazy(() => import('./Pages/Product'));
const Header = lazy(() => import('./Components/Header.js'));
const Footer = lazy(() => import('./Components/Footer.js'));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div><Loading/></div>}>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Review" element={<Review/>} />

            <Route path="/Blog" element={<Blog/>} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Footer/>
        </Suspense>
      </BrowserRouter>
    </>
  );
};


export default App;
