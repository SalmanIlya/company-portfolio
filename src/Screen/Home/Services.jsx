
import React from 'react'
import {HiOutlineNewspaper} from  "react-icons/hi"
import {CiBasketball} from  "react-icons/ci"
import {AiOutlineDashboard} from  "react-icons/ai"
import {BiWorld} from  "react-icons/bi"

const Testimunels = () => {
    const data=[
        {
            id:"1",
            icons:<CiBasketball size={50} className="mx-20 bg-pink-300 text-pink-600 rounded-full px-1 py-1"/>,
            title:"Webside Designing",
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis aperiam ut, ipsum cumque deserunt libero est quaerat tempora animi minima, explicabo expedita qui perferendis !"
        },
        {
          id:"2",
          icons:<HiOutlineNewspaper size={50} className="mx-24  bg-blue-300 text-blue-600 rounded-full px-1 py-1"/>,
          title:"Full stack webside ",
          description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis aperiam ut, ipsum cumque deserunt libero est quaerat tempora animi minima, explicabo expedita qui perferendis incidunt distinctio. Deserunt officia voluptas ea quisquam, "
      },
      {
        id:"3",
        icons:<AiOutlineDashboard size={50} className="mx-24  bg-green-300 text-green-500 rounded-full px-1 py-1"/>,
        title:"Full stack webside ",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis aperiam ut, ipsum cumque deserunt libero est quaerat tempora animi minima, explicabo expedita qui perferendisDolor soluta beatae amet maxime delectus numquam!"
    },
    {
      id:"4",
      icons:<BiWorld size={50} className="mx-24  bg-blue-300 text-blue-600 rounded-full px-1 py-1"/>,
      title:"WordPress webside",
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis aperiam ut, ipsum cumque deserunt libero est quaerat tempora animi minima, explicabo expedita qui perferendis incidunt soluta beatae amet maxime delectus numquam!"
  },
        

    ]
  return (
    <>                               
    <div className='flex  align-middle' id='services'>
      <div className='mx-48'>
      <h1 className='text-center mx-96 mt-10 text-4xl font-bold my-10 border-b-4  border-purple-500 '>Services</h1>
      </div>

    </div>
    <div className='flex flex-wrap'>
      {
        data.map((item)=>{
return (
  <div className="w-full hover:scale-105 duration-200 flex flex-col p-2 w-auto rounded-lg shadow-xl lg:flex lg:max-w-lg m-10" key={item.id}>
 <>{item.icons}</>
  <div className="pl-2">
      <h4 className="text-xl font-semibold tracking-tight w-52 text-blue-600">
         {item.title}
      </h4>
      <p className="mb-2 leading-normal text-justify w-52">
         {item.description}
      </p>
     
  </div>
</div>

)
        })
      }

    </div>
    </>

  )
}

export default Testimunels