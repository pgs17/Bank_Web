import React from 'react'
import './Landing.css'
import BANK from '../..//Assets/images/bank.png'
import { AiOutlineTransaction } from 'react-icons/ai'
import { GoPerson } from 'react-icons/go'
import { GoDiffAdded } from 'react-icons/go'
export default function Landing() {
  return (
    <header id='  about_container'>

      <h2>WORLD BANK OF INDIA</h2>
      <p>This is a simple banking site through which you can
        create an account and transfer money with each other and see
        the details of it.
        You do the business, we’ll handle the money.For ambitious companies around the world, Wallet makes moving money as simple.
      </p>
      <div className='container details_container'>

        <div className='about_bank'>
          <div className='about_bank_img'></div>
          <img src={BANK} alt="BANK IMAGE" />
        </div>
        <div className='details'>
          <div className='services_details'>
            <article className='services'>
              <AiOutlineTransaction className='about_icon' />
              <h4>Transactions</h4>
              <strong> Go to the Transaction page and check the transactions and amount sent or recieved by you .</strong>
            </article>
            <article className='services'>
              < GoPerson className='about_icon' />
              <h4> Existing Customers</h4>
              <strong> Go to the customer page and tranfer money to any person
                by clicking on transfer and check the exisiting customers.</strong>
            </article>
            <article className='services'>
              <GoDiffAdded className='about_icon' />
              <h4> New User</h4>
              <strong>Add the basic details about yourself and some bank details
                to open an account.</strong>
            </article>
          </div>

        </div>
      </div>

    </header>
  )
}
