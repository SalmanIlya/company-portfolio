import React, { useState } from 'react'
import Icons from './Icons'

const HeroSection = () => {
  const [a,b]=useState(0)
  const [c,d]=useState(1)
  const data=[
    {
      id:1,
      title:", Search Engine Optimization, Logo & Design Services, Internet Marketing etc. We provide website that fits your specific and customized needs. adipisicing elit.  Voluptatibus est blanditiis ipsam adipisci, doloribus quis. Perspiciatis, quia! "
    },
    {
      id:2,
      title:"sit amet consectetur adipisicing elit. . Voluptatibus est blanditiis ipsam adipisci, doloribus quis. Perspiciatis, quia! adipisicing elit.  Voluptatibus est blanditiis ipsam adipisci, doloribus quis. Perspiciatis, quia!"
    },
    {
      id:3,
      title:" adipisicing elit.  Voluptatibus est blanditiis ipsam adipisci, doloribus quis. Perspiciatis, quia! adipisicing elit.  Voluptatibus est blanditiis ipsam adipisci, doloribus quis. Perspiciatis, quia!"
    },
  ]
  return (
    <div className='div-herosection relative ' id='home'>
      
      
      <div className='flex flex-col justify-center items-center mx-15 head1 '>
        <h1 className='text-4xl '><strong>WellCome to TechSpace</strong></h1>
        <h1 className='text-3xl '><strong>Who We Are</strong></h1>

        <div className='flex flex-row justify-center items-center '>
          <button className=' m-1 text-4xl' onClick={()=>{
            if(a==2 & c==3){
              b(0)
              d(1)
          
            }else{
              b(a+1)
              d(c+1)
      
            }
          }}>&#60;</button>
{
  data.slice(a,c).map(({id,title})=>{
return (
  <div key={id} className="w-2/3 flex flex-row justify-center items-center text-center" >

  <p className="text-justify  ">
    {title}
  </p>
  </div>
)
  })
}
<button  className='m-1  text-4xl' onClick={()=>{
            if(a==2 & c==3){
              b(0)
              d(1)
             
            }else{
              b(a+1)
              d(c+1)
     
            }
          }}>&gt;</button>
</div>

      </div>
<Icons/>

    </div>
  )
}

export default HeroSection