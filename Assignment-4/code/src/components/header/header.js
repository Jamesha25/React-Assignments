import React from 'react'
import './header.css'

export default function Header() {
  return (
    <div className='header-container'>
        <div className='logo-container'>
            <i className="fab fa-instagram"/>
            <span>Instagram</span>
        </div>
        <div className='icons-container'>
            <i className="fas fa-camera"/>
        </div>
    </div>
  )
}
