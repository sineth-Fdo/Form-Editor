import React from 'react'
import { FaDotCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const StepComponent = () => {
  return (
    <div className='relative w-[100%] h-11 flex justify-center items-center bg-[#f4f4f5] rounded-md mb-3 hover:bg-[#e9e9e9] cursor-pointer'>
        <FaDotCircle 
            className='text-[#0000009d] text-[12px] absolute left-0 ml-2'
        />
        <h1 className='text-[12px] text-[#000000]'>Welcome Screen</h1>
        <RxCross1  
            className='text-[#0000009d] text-[12px] absolute right-0 mr-2'
        />
    </div>
  )
}

export default StepComponent