import React from 'react'
import './Footer.css'
import { FaInstagramSquare } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import {SiTata} from 'react-icons/si'
import{FcGoogle} from 'react-icons/fc'
import{AiFillRedditCircle} from 'react-icons/ai'
import {SiAudi} from 'react-icons/si'
export default function Footer() {
  return (
    <footer>
      <div className="footer_content">
        <div>
          <h3><strong>Lets Come Together And We will help you in keeping your Finances in track!</strong></h3>
          <h5>
            For Further information contact us on one of the platforms given below. We will  try to  respond to you as soon as possible
          </h5>
          <div className='footer_socials'>
            <a href="https://www.instagram.com/toxic_priyanshu/" target='_blank' className='icons'><FaInstagramSquare /> </a>
            <a href="https://www.linkedin.com/in/priyanshu-gourav-sarangi-5644b8112/" target='_blank' className='icons'><BsLinkedin /></a>
          </div>
        </div>
        <div className='sponsors'>
           <div>
            <h3><strong>Sponsors</strong></h3> 
             <div className='sponsor_icons'>
            <a href="#" ><SiTata/></a>
            <a href="#"><AiFillRedditCircle/></a>
            <a href="#"><SiAudi/></a>
            <a href="#"><FcGoogle/></a>
            </div>
           </div>
        </div>
        <div className='copyright_section'>
          Copyright @ {new Date().getFullYear()}{""}{""}  
            <a href="#"> PRIYANSHU GOURAV SARANGI</a>
        </div>
      </div>
    </footer>
  )
}
