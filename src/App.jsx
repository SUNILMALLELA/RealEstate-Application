import React from 'react'
import Header from './Components/Header/Header'
import  Hero  from './Components/Hero/Hero'
import Brands from './Components/Brand/Brands'
import Popular from './Components/Populars/Popular'
import OurValues from './Components/Values/OurValues'
import ContactUs from './Components/Contact/ContactUs'
import GetStart from './Components/GetStart/GetStart'
import Ending from './End/Ending'


export default function App() {
  return (
  <>
  <Header/>
  <Hero></Hero>
  <Brands></Brands>
  <Popular/>
  <OurValues></OurValues>
  <ContactUs></ContactUs>
  <GetStart></GetStart>
  <Ending></Ending>
  </>
  )
}
