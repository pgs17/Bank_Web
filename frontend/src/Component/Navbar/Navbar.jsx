import React from 'react'
import './Navbar.css'
 
export default function Navbar() {
  return (
     <nav>
        <div>
          <h3>WORLD BANK</h3>
          <ul>
                <li>
                  <a href="/getusers">Users</a>
                </li>
                <li>
                  <a href="/transactions">Transactions</a>
                </li>
                <li>
                  <a href="/adduser">New User</a>
                </li>
          </ul>
        </div>
     </nav>
  )
}
