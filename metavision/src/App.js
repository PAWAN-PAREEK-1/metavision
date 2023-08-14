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

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div><Loading/></div>}>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Product />} />
            <Route path="/Facilities" element={<Review/>} />
            <Route path="/Reviews" element={<Contact />} />
            <Route path="/Gallery" element={<Blog/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};


export default App;
