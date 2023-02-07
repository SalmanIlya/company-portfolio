import { useState } from "react"
import "./style.css"
const About=()=>{
    const [state,setState]=useState([
        {
            id:"1",
            title:"About",
            description:`‘7tech IT Services Pvt Ltd’ is a leading web designing, web development and software development firm based in India'.
            At ‘7tech IT Services Pvt Ltd’ we strive to deliver best possible results to our clients. Our technologically superior yet simple solutions will help your business to grow and run smoothly. Our customer centric approach always keeps clients requirement as priority.
            We help in growing your business, that's the way we grow.`,
            image:"/About/1.jpg",
            
        },
        {
            id:"2",
            title:"Our Mission",
            description:` hours for developing the latest technology for the ultimate client satisfaction in the minimum amount of time.They have expertise in new age technology supported by experience of hundread of such Mega projects.
            'Our ultimate objective is to provide IT services and solutions that helps in simplifying and growing our client's business'.
            At ‘7tech IT Services Pvt Ltd’ we strive to deliver best possible results to our clients. Our technologically superior yet simple solutions will help your business to grow and run smoothly. Our customer centric approach always keeps clients requirement as priority.
            We help in growing your business, that's the way we grow.`,
            image:"/About/2.jpg"
        },
        {
            id:"1",
            title:"Our Vision",
            description:` is a leading web designing, web development and software development firm based in India.
            Our team of developer has the experience of Thousands of hours for developing the latest technology for the ultimate client satisfaction in the minimum amount of time.They have expertise in new age technology supported by experience of hundread of such Mega projects.
            'Our ultimate objectiT services and solutions that helps in simplifying and growing our client's business'.
            At ‘7tech IT Services Pvt Ltd’ we strive to deliver best possible results to our clients. Our technologically superior yet simple solutions will help your business to grow and run smoothly. Our customer centric approach always keeps clients requirement as priority.
            We help in growing your business, that's the way we grow.`,
            image:"/About/3.jpg"
        },
    ])
   
    
    const [category,setCategory]=useState("About")
    const fetchdata=state.filter(({title}) => title ===category )
    console.log(fetchdata);
    return (
        <div  className="mt-20 flex flex-col justify-center items-center">
            <div className="" id="about">
            <h1 className='text-center text-4xl font-bold w-28  my-10  border-b-4 heading border-purple-500 '>About</h1>
            </div>
    
            <div>
            </div>
            <div className="flex  mx-96">
            {state.map((item)=>{
                return(
            <button  className="text-2xl  bg-purple-500 text-white hover:bg-purple-800 p-5 m-5 hover:scale-105 duration-200 " onClick={()=>{
setCategory(item.title)
            }}>{item.title}</button>
              )  })}
            </div>
              {
        fetchdata.map((item)=>{
            return(
                <div key={item.id} className="flex flex-row justify-center items-center">
                    <div className="w-1/2">
                    <h1 className="text-2xl m-5 "><strong>{item.title}</strong> </h1>
                    <p className="m-5  h-96 text-justify">{item.description}</p>
                    </div>
                    <img src={item.image} className="w-1/2 h-1/2" />
                </div>
            )
        })
              }


        </div>
    )
    }
    export default About