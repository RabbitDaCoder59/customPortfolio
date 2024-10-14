import React from 'react'
import Heading from '../components/Heading'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

const Works:React.FC = () => {
  return (
    <div className="lg:w-[800px] w-full h-full bg-white mt-8 rounded-xl  font-poppins">
    <div className="lg:py-14 lg:px-10 px-2 py-7">
      <Heading text='Works'/>

      <Portfolio/>
    </div>
    <Footer/>
    </div>
  )
}

export default Works