import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
  
 const renderFields=(label,value)=>{
   return(
     <div className='fields-container'>
       <label>{label}</label>
       <div>{value}</div>
     </div>
   );
 }

return(
  <div className="App">
    <div className='card-container'>
      <img src = {employee.profileImg} width='100%'/>
      <h2>{employee.name}</h2>
      {renderFields('location',employee.location)}
      {renderFields('bloodGroup',employee.bloodGroup)}
      {renderFields('age',employee.age)}
    </div>
  </div>
)
}



export default App;
