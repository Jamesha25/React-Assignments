import React from 'react';
import './Postview.css';
import Header from '../../components/header/header.js'
import Cards from '../../components/cards/cards';
import { useState, useEffect } from "react";

export default function Postview() {

  const [users,setUsers]=useState([])

  useEffect(() => {
    const fetchUsers = async()=>{
      try {
        let response = await fetch('http://localhost:3004/user')
        let users = await response.json()
        console.log(users)
        setUsers(users)
      } catch (error) {
        console.log(error)
      }
    }
    fetchUsers();
  }, [])
  

  return (
    <div className="site-container">
      <Header/>
      {users.length===0?
      <h1>Loading....</h1>:
      users.map((item)=>{
        return <Cards data={item} key={item.id}/>
      })}
    </div>
  );
} 


