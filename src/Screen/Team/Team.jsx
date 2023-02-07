import "./Style.css"
const Team=()=>{
    const data=[
        {
            id:1,
            name:"Zeer Ahmad",
            image:"/Team/zeer.jpeg",
            describe:"Hi Every. I'm Zeer Ahamad I'm full Stack webside developer"
        },
        {
            id:2,
            name:"Salaman Ilyas",
            image:"/Team/salman.png",
            describe:"Hi Every.I'm salaman I'm full Stack webside developer"
        },
        {
            id:3,
            name:"Ahsan Shazab Qurazhi",
            image:"/Team/Ahsan.png",
            describe:"Hi Every . I'm Ahsan I'm full Stack webside developer"
        },
    ]
    return (
        <>
        <div className="" id="team">
        <div className="mx-48">
            <h1 className='text-center text-4xl font-bold w-24 mx-96  my-20 border-b-4 heading border-purple-500 '>Team</h1>
            </div>
            <div className="flex flex-wrap items-center justify-center">
            {
                data.map((item)=>{
                    return(
                        <div key={item.id} className=" mx-7 hover:scale-105 card duration-200 max-w-sm rounded   overflow-hidden shadow-lg m-5 h-auto">
  <img className="image" src={item.image} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{item.name}</div>
    <p className="text-gray-700 text-base">
   {item.describe}
    </p>
  </div>
  
</div>
                    )
                })
            }
            </div>
           
</div>
        

        </>
    )
    }
    export default Team