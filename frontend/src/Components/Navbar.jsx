 import React from 'react'
 
 export default function Navbar() {
   return (
     <nav class='flex flex-row gap-4  justify-center'>
           <a href="/getusers" target='_blank' className='font-medium  text-xs  align-middle'>Customers</a>
           <a href="/getusers" target='_blank' className='font-medium  text-xs  align-middle'>Transactions</a>
           <a href="/getusers" target='_blank' className='font-medium  text-xs  align-middle' >New Customer</a>
     </nav>
   )
 }
 