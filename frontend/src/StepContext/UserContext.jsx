import React, { createContext, useState } from "react";
// import {  useNavigate} from 'react-router-dom'
import Axios from 'axios'

// a context object is created 
export const MultistepContext = createContext()


export default function StepContext (props){
   // navigate was use history in dom 5
    // const navigate = useNavigate(); 

    const [CurrentStep,SetCurrentStep] = useState(0)
   const [Userdata, SetUserdata] = useState([])
   const [Finaldata, SetFinaldata] = useState([])
   const [TransferAmount, SetTransferAmount] = useState([])
    

    // for submiting final data
async function Submitdata(){
    SetFinaldata(Finaldata => [Finaldata,Userdata])
    console.log(Userdata)
    await Axios.post("/adduser",Userdata)
    SetUserdata('')
    SetCurrentStep(1);
    // navigate('/getusers');
}
 

// for transfer money
async function TransferMoney() {
await Axios.post('/user/money',TransferAmount)
navigate('/getusers')
}

//   context.Provider takes value as props and this provider can be connected to many consumers and they will re render when anyone value changes 
    return (
         <MultistepContext.Provider value={{CurrentStep,SetCurrentStep,Userdata,SetUserdata,Finaldata,SetFinaldata,Submitdata,TransferAmount,SetTransferAmount,TransferMoney}}>
            {props.children}
         </MultistepContext.Provider>
    )
}