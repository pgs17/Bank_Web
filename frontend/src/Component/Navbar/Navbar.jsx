import React, { useState } from 'react'
import './Navbar.css'
import {FaHome} from 'react-icons/fa'
import {IoIosPeople} from 'react-icons/io'
import {FcMoneyTransfer} from 'react-icons/fc'
import {FaHandHoldingMedical} from 'react-icons/fa'
export default function Navbar() {
 const [active , setactive]  = useState('/');  
  return (
    <nav>
       <a href="/" onClick={()=> {setactive('/')}} className={active ==='/' ? 'active':'' }> <FaHome/></a>
      <a href="/getusers" on onClick={() => {setactive('/getusers')}} className={active ==='/getusers'? 'active' : ''}> <IoIosPeople/> </a>
      <a href="/transactions" onClick={()=>{setactive('/transactions')}} className={active ==='/transactions' ? 'active':''}> <FcMoneyTransfer/></a>
      <a href="/adduser" onClick={()=> {setactive('/adduser')}} className={active ==='/adduser' ? 'active' : ''}> <FaHandHoldingMedical/></a>
    </nav>
  )
}
