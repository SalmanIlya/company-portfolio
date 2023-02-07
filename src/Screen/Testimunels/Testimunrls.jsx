import React from 'react'

const Testimunrls = () => {
    const data=[
        {
            id:1,
            description:"Great experience again, have worked with him in the past and he works with you until you're happy with the final product",
          name:"kenkenq"
        },
        {
          id:2,
          description:"Great seller, amazing experience during the whole process. I do recommend codeaddictor for your project. I am very satisfied.",
        name:"emarkt_studio"
      },
      {
        id:3,
        description:"Rightsort is a true professional, his work is excellent and he is very easy to work with. I will use him every time!",
      name:"abraciak"
    },

    ]
  return (
    <div id='testimunels'>
         <div className="mx-48">
            <h1 className='text-center text-4xl font-bold w-52 mx-96  my-20 border-b-4 heading border-purple-500 '>Testimunrls</h1>
            </div> 
            <div className='flex flex-row justify-between items-center'>
              {
                data.map((item)=>{
                  return(
                    
<div key={item.id} class="block m-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
</div>

                  )
                })
              }
            </div>
    </div>
  )
}

export default Testimunrls