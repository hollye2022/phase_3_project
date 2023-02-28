import React from 'react'


function EventList({event,currentUser}) {

  function handleClick(){
    fetch("http://localhost:9292/signups",{
      method:"POST",
      headers:{
        Content_type:"application/json",
        Accept:"application/json"
      },
      body:JSON.stringify({currentUser})
    })
  }
 

  return (
    <div style={{display:'inline-block'}}>
    <img src={event.image_url} style={{width:"148px",height:"148px"}} alt="event image"/>
    <p>Name: {event.name}</p>
    <p>Fee: ${event.ticket}</p>
    <p>Time: {event.formatted_time}</p>
    <p>Address: {event.address}</p>
    <p>{event.users.length} people are going to the event!</p> 
    <button onClick={handleClick} >Count me in</button>
    </div>
  )
}

export default EventList