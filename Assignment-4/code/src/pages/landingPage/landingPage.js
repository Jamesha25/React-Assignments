import React from 'react'
import './landingPage.css'
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className='landingPage-container'>
      <h1>10x Team 04</h1>
      <Link to="/postView">
        <button>
          Enter
        </button>
      </Link>
    </div>
  )
}
