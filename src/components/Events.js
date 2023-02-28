import React from 'react'
import EventList from './EventList'

function Events({newData,currentUser}) {
  return (
    <div>
        {newData.map(event=>{
            return <EventList event={event} key={event.id} currentUser={currentUser}/>
        })}
   
    </div>
  )
}

export default Events