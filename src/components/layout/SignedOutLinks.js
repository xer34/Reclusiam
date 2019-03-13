import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/signup'>Sign Up</NavLink></li>
        <li><NavLink to='/signin'>Log In</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/AppLanding'>BattleTimer</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks