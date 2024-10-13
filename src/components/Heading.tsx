import React from 'react'
import "../styles/style.css"

interface HeadinText {
  text:string;
}
const Heading:React.FC<HeadinText> = ({text}) => {
  return (
   <div className="flex gap-5 items-center mb-3">
     <h1 className='lg:text-5xl text-3xl font-semibold'>{text}</h1>
     <div className="w-[30%] h-[3px] rounded-xl customLinear"></div>
   </div>
  )
}

export default Heading