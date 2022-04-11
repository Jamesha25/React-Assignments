import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Postview from './pages/postview/Postview'
import LandingPage from './pages/landingPage/landingPage'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/postView" element={<Postview/>}/>
        </Routes>
    </BrowserRouter>
  )
}
