import React from 'react'
import "./style.css"
import Iframe from './Ifram'
import {FaLocationArrow} from "react-icons/fa"
import {BsFillTelephoneFill} from "react-icons/bs"
import {TfiEmail} from "react-icons/tfi"

import Emailjs from './Email';
const Contact = () => {
  return (
    <div className='flex flex-col justify-between items-center'>
    <div className=' div-contact   ' id='contact'>
                  <div className=' drop-shadow-xl'>

                  <div className="mt-20 flex flex-col justify-between items-center">
                    
            <h1 className='text-center text-4xl font-bold w-36   my-10 border-b-4 heading border-purple-500 '>Contact</h1>
            </div>
    <div className='flex  justify-between items-center'>
      <div className=' ml-20 flex flex-col justify-center items-center'>
<div className=' flex flex-col justify-between items-center m-6'>
  <FaLocationArrow  className='text-white' size={50}/>
  <h1>Mollah Sattyan</h1>
</div>
<div className=' flex flex-col justify-between items-center m-6'>
  <BsFillTelephoneFill  className='text-white' size={50}/>
  <h1>+92325-5539535</h1>
</div>
<div className=' flex flex-col justify-between items-center m-6'>
  <TfiEmail className='text-white' size={50}/>
  <h1>Salamanilyas101@gmail.com</h1>
</div>
      </div>
    <Emailjs/>

    </div>
    </div>
    
    </div>
    <Iframe/>
    </div>

  )
}

export default Contact