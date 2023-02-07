import {AiOutlineMail,AiOutlineFacebook,AiOutlineLinkedin,AiOutlineInstagram} from "react-icons/ai"
import {MdEmail} from "react-icons/md"
import { Link } from "react-router-dom"
const Icons = () => {
  return (
    <div className="flex justify-center mt-5">
 <AiOutlineFacebook size={40} className="text-blue-600 bg-white m-2 rounded-lg p-1 hover:bg-blue-600 hover:text-white ease-in-out duration-300 " />
 <AiOutlineLinkedin size={40} className="text-blue-600 bg-white m-2 p-1 rounded-lg 
 hover:bg-blue-600 hover:text-white
 "/>
 <AiOutlineInstagram size={40} className="text-pink-600 p-1 bg-white m-2 rounded-lg
  hover:bg-pink-600 hover:text-white
 " />
 <AiOutlineMail size={40} className="text-orange-300 p-1 bg-white m-2 rounded-lg
  hover:bg-orange-600 hover:text-white
 "/>
    </div>
  )
}

export default Icons