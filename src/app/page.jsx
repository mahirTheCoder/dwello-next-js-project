import React from 'react'
import Navbar from './Componets/Navbar'
import Banner from './Componets/Banner'
import Overview from './Componets/Overview'
import Projectgalary from './Componets/Projectgalary'

const page = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Overview/>
    <Projectgalary/>
    </>
  )
}

export default page