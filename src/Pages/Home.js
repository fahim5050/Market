import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import Product from '../Components/Product'
import { useLoaderData } from 'react-router-dom'
import { Component } from '../Components/Slide'
// import Hero from '../Components/Hero'


const Home = () => {
const [products, setProducts]=useState([])
const data=useLoaderData()
useEffect(()=>{
  setProducts(data.data)
},[data])
  return (
    <div>
  {/* <Banner/> */}
  <Component/>
  {/* <Hero/> */}
  <Product products={products}/>
    </div>
  )
}

export default Home