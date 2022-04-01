import React from 'react';
import './App.css';



function App() {
  const renderFields=(label,value)=>{
    return(
      <div className='field-container'>
        <span className='label'>{label}</span>
        <span className='value'>{value}</span>
      </div>
    );
  }
  return (
    <div className="site-container">
      <div className='header'>
        <span className='btn'>&lt;</span>
        <span>Alan Ford <br/>00005152</span>
        <span className='btn'>Print</span>
      </div>
      <div className='customer-info'>
        {renderFields('Appointment:','9:00 (25-05-2016)')}
        {renderFields('Email:','jamy@gmail.com')}
        {renderFields('Phone:','+9629002859')}
      </div>
      <div className='order-info'>
        {renderFields('Status','In Progress')}
        {renderFields('Door','Mark')}
        {renderFields('Time','9:00 (25-05-2016)')}
      </div>
      <div className='product-list'>
        <span className='checkBox'><input type='checkbox'/></span>
        <img src='https://www.w3schools.com/howto/img_avatar.png' width='200px'/>
        {renderFields('Harry Potter','Hello, my name is potter, Harry Potter. I make pots.')}
      </div>
    </div>
  );
}

export default App;
