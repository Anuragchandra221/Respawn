import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Division from '../Components/Division'
import Highlights from '../Components/Highlights'
import homeImg from "../Assets/Images/Home.png"
import vector1 from "../Assets/Images/vector(2).png"
import vector2 from "../Assets/Images/vector.svg"
import Sponsors from '../Components/Sponsors'
import Footer from '../Components/Footer'
import "./Home.css"

function Home() {

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
          entries.forEach((entry)=>{
            if(entry.isIntersecting){
              entry.target.classList.add('show')
            }else{
              entry.target.classList.remove('show')
            }
          })
        },[])
        const observerLeft = new IntersectionObserver((entries)=>{
          entries.forEach((entry)=>{
            if(entry.isIntersecting){
              entry.target.classList.add('show-left')
            }else{
              entry.target.classList.remove('show-left')
            }
          })
        },[])
      
        const hiddenElements = document.querySelectorAll('.hidden')
        const hiddenElementsLeft = document.querySelectorAll('.hidden-left')
        hiddenElements.forEach((el)=> observer.observe(el))
        hiddenElementsLeft.forEach((el)=> observerLeft.observe(el))
      })


    
  return (
    <div className='respawn'>
        {/* <div className='backgound-respawn'></div> */}
        <Navbar/>
        <div className='d-flex main-div row home-div  mx-auto justify-content-center align-items-center'>
            <img className='vector-1' src={vector1}/>
            {/* <img src={vector2} className='vector-2' /> */}
            <div className='vector-2'></div>
            <div className='d-flex col-12 mt-5 pt-4 pt-lg-0 mt-lg-0 img-div col-lg-6 p-0  justify-content-center justify-content-lg-end align-items-center align-items-lg-end'>
                <img className='home-img ' src={homeImg} />
            </div>
            <div className='d-flex col-12  col-lg-6 justify-content-center'>
                <div className='d-flex pl-lg-3 flex-column align-items-center align-items-lg-start  respawn-second-div home-para-div'>
                    <h2 className='mb-2 hidden-left respawn-heading'>RESPAWN'24</h2>
                    <p className='sub-text mb-4 hidden-left'>PLAY, SLAY, REPEAT</p>
                    <p className='text-left para mb-4 hidden-left'>"Unlock the thrill of intense gaming battles! Secure your spot by registering for the upcoming tournament and embrace the competition fever"</p>
                    <button className='respawn-btn px-3 py-2 hidden-left'>Register Here</button>
                </div>
            </div>
        </div>
        <div className='py-lg-5'></div>
        <Division/>
        <div className='py-lg-5'></div>
        <Highlights/>
        <div className='py-lg-5'></div>
        <Sponsors/>
        <div className='py-lg-5'></div>
        <Footer/>
    </div>
  )
}

export default Home