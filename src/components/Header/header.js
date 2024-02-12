import React from 'react'
import { NavLink } from "react-router-dom";

const header = () => {
  return (
    <div>
      <header className='hero-header'>
        <NavLink to="/"> Placebo </NavLink>
      </header>
    </div>
  )
}

export default header