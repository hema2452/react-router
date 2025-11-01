import React from 'react'
import './App.css'
// import Navbar from './component/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
// import Contact from './pages/Contact'
import About from './pages/About'
import Info from './component/Info'
import Form from './component/Form'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import RootLayout from './roota/RootLayout'
import ContactLayout from './roota/ContactLayout'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<RootLayout/>}>
             <Route index element={<Home/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="products" element={<Products/>}/>
              <Route path="contact" element={<ContactLayout/>}>
                <Route path="info" element = {<Info/>}/>
                <Route path = "form"  element = {<Form/>}/>
              </Route>
              <Route path="*" element={<PageNotFound/>}></Route>
          </Route>

   )
  )
  return (
    <>
   <RouterProvider router={router}/>
 
    {/* <Routes>
       <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/Contact" element={<Contact/>}/>
                                      
    </Routes> */}
  
    </>
    
  )
}

export default App

