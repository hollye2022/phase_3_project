import React, { useState, useEffect } from 'react'
import Events from './Events'



function Home() {

  const [events,setEvents] = useState([])
  
  const [searchTerm, setSearchTerm]=useState("")
  const [formData,setFormData] = useState({
    name:"",
    address:"",
    time:"",
    ticket:"",
    image_url:"",
  })

  function fetchEvents(){
    fetch("http://localhost:9292/events")
    .then(resp=>resp.json())
    .then(data=> setEvents(data)
)
  }

  useEffect(()=>{
    fetch("http://localhost:9292/events")
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data)
      setEvents(data)
    })
  },[])

  const currentUser = 68

  // useEffect(()=>{
  //   fetch("http://localhost:9292/users")
  //   .then(resp=>resp.json())
  //   .then(data=>setUsercount(data))
  // },[])

  function handleChange(e){
    setSearchTerm(e.target.value)
  }
   
  const newData=events.filter(event=>event.name.toLowerCase().includes(searchTerm.toLowerCase()))
  
  function handleForm(e){
    const {name,value} = e.target

    setFormData(prev=>({...prev,[name]:value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:9292/events",{
      method:"POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body: JSON.stringify({
                name:formData.name,
                ticket:parseInt(formData.ticket),
                address:formData.address,
                time:formData.time,
                image_url:formData.image_url

    })

  })
  .then(resp=>resp.json())
  .then(fetchEvents())
  e.target.reset()
  }

  return (
    <div>
      <div>
       <h1 style={{color:"purple"}} >Let's Meet Up Friends!</h1> 
       <label style={{color:"red"}}>Search an activity:
       <input onChange={handleChange} type="text" placeholder="Activity name"></input>
       </label>
       </div>
       <div>
       <form onSubmit={handleSubmit} >
      <label>Activity Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleForm}></input>
      <label>Time:</label>
      <input type="datetime-local" value={formData.time} name="time" onChange={handleForm}></input>
      <label>Address:</label>
      <input type="text" name="address" value={formData.address} onChange={handleForm}></input>
      <label>Fee:$</label>
      <input type="integer" name="ticket" value={formData.ticket} onChange={handleForm}></input>
      <label>Image_url</label>
      <input type="text" name="image_url" value={formData.image_url} onChange={handleForm}></input>

      <button >Create a Fun Activity</button>
       </form>
      
       </div>
       
      
       <h2>Fun Activities</h2>
       <div>
        <Events events={events} newData={newData} currentUser={currentUser}/>
        </div>
        
    </div>
  )
}

export default Home