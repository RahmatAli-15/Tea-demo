import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Banner from "./components/banner/Banner";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";


function App() {

  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  })
 
  return (
   <div className="overflow-x-hidden">
   <Navbar/>
   <Home/>
   <Services/>
   <Banner/>
   <Testimonials/>
   <Footer/> 
   </div>
  )
}


export default App
