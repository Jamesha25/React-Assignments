import React from 'react'
import './cards.css'

export default function Cards(props) {
    const {data} = props
    // let data={
    //     name: "Siva",
    //     location: "Bengaluru",
    //     likes: 64,
    //     description: "Hello I am a full stack developer",
    //     PostImage: "assets/pic-1.png",
    //     date: "09-01-1998"
    // }
    //console.log(data)
  return (
    <div className='card-container' key={data.id}>
        <header>
            <div className='name-container'>
                <h3>{data.name}</h3>
                <span>{data.location}</span>
            </div>
            <div className='icons-container'>
                <i className="fas fa-ellipsis-h"/>
            </div>
        </header>
        <img src={data.PostImage} alt={data.name}/>
        <div className='mid-section'>
            <div className='icons-area'>
                <span>
                    <i className="fas fa-heart"/>
                    <i className="fab fa-telegram-plane"/>
                </span>
                <div className='likes-container'>{`${data.likes} Likes`}</div>
            </div>
            <div className='date-area'>
                {data.date}
            </div>
        </div>
        <p className='description-container'>
            {data.description}
        </p>
        
    </div>
  )
}
