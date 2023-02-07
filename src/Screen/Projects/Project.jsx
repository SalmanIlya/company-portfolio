import React from 'react'
import "./Style.css"
const Project = () => {
    const data=[
        {
            id:1,
            github:"https://github.com/SalmanIlya/Dump-Ecommers-Webside",
            demo:"https://elaborate-dasik-dc605a.netlify.app/contact",
            image:"/projects images/s1.png",
            projectName:"Ecommers webside"
        },
        {
            id:2,
            github:"https://github.com/SalmanIlya/dashboard-pso",
            demo:"https://candid-khapse-dd8e4f.netlify.app",
            image:"/projects images/s2.png",
            projectName:"Point Of Sell"
        },
        {
            id:4,
            github:"https://github.com/SalmanIlya/portfolio",
            demo:"https://tangerine-bombolone-ba8338.netlify.app/",
            image:"/projects images/s4.png",
            projectName:"Portfolio"
        },
        {
            id:5,
            github:"https://github.com/SalmanIlya/portfolio-web-2",
            demo:"https://roaring-jelly-cdbcf5.netlify.app/",
            image:"/projects images/s3.png",
            projectName:"Portfolio"
            
        }
    ]
  return (
    <div id='projects' >
         <div className="mx-48 mt-10">
            <h1 className='text-center text-4xl font-bold w-36 mx-96  my-10 border-b-4 heading border-purple-500 '>Projects</h1>
            </div>

            <div className='flex flex-row flex-wrap justify-center'>
                {
                    data.map((item)=>{
                        return(
                            <div key={item.id} className="hover:scale-105 duration-200 mx-7 max-w-sm rounded   overflow-hidden shadow-lg m-5 h-auto">
  <img className="img" src={item.image} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{item.projectName}</div>
<div className='flex  justify-between'>

<button className="text-2xl bg-purple-500 text-white hover:bg-purple-800 p-5 m-5 hover:scale-105 duration-200" ><a href={item.github}>Code</a></button>
<button className="text-2xl bg-purple-500 text-white hover:bg-purple-800 p-5 m-5 hover:scale-105 duration-200" ><a href={item.demo}>demo</a></button>
    </div>
  </div>
  
</div> 
                        )
                    })
                }
            </div>

    </div>
  )
}

export default Project