import About from "./About/About"
import Contact from "../Contact/Contact"
import Project from "../Projects/Project"
import Skilles from "../Skilles/Skilles"
import Team from "../Team/Team"
import HeroSection from "./HeroSection"
import Icons from "./Icons"
import "./Style.css"
import Services from "./Services"
import Testimunrls from "../Testimunels/Testimunrls"
const Home=()=>{
return (
    <div className="home-div ">
    <HeroSection/>
    <About/>
    <Services/>
    <Team/>
    <Testimunrls/>
    <Skilles/>
    <Project/>
    {/* <Contact/> */}
    </div>
    
    
)
}
export default Home