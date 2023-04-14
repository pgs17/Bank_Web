 import React from 'react'
//  import {BrowserRouter}  from 'react-router-dom'
//  import {Routes} from 'react-router-dom'
//  import  {Route} from 'react-router-dom'
//  import {MultistepContext} from './StepContext/UserContext'
  import HomePage from './Components/HomePage'
  import Navbar from './Components/Navbar'
  import Footer from './Components/Footer'
  import Transactions from './Components/Transactions'
  import User from './Components/User'
  import Users from './Components/Users'
import AddUser from './Components/AddUser'
 
import './App.css'

 const App = () => {
   return (
   

    <div>
     <Navbar/>
     <HomePage/>
     <Users/>
     <User/>
     <Transactions/>
     <AddUser/>
      
     <Footer/>
   </div>
    

   )
 }
 
 export default App
 