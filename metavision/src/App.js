import React from 'react'

import {BrowserRouter,Routes,Route} from "react-router-dom";

import { lazy,Suspense } from 'react';
// const Loading = lazy(() => import('./Components/Header.js'));
import Header from './Components/Header';




const App = () => {

  return (

    <>

  {/* <BrowserRouter>
  <Suspense fallback={<div><Loading/></div>}> */}
  <Header/>


  {/* <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
   < Route path="/Project" element={<Project/>}/>
   <Route path="/Facilities" element={<Facilities/>}/>
   <Route path="/Reviews" element={<Reviews/>}/>
   <Route path="/Gallery" element={<Gallery/>}/>
   <Route path="/Faqs" element={<Faqs/>}/>
   <Route path="/Gallery" element={<Gallery/>}/>
   <Route path="/Contact" element={<Contact/>}/>

  </Routes> */}


  {/* <Footer/> */}
  {/* </Suspense>
  </BrowserRouter> */}


    </>
  )
}

export default App