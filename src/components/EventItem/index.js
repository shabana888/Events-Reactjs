// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem

// import './index.css'

// const EventItem = props => {
//   const {eventDetails, getEventId} = props
//   const {id, imageUrl, name, location} = eventDetails

//   const imageClicked = () => {
//     getEventId(id)
//   }

//   return (
//     <li key={id} className="list-container">
//       <button type="button" onClick={imageClicked}>
//         <img src={imageUrl} alt="event" className="event-image" />
//       </button>
//       <div>
//         <p className="event-heading" onClick={imageClicked}>
//           {name}
//         </p>
//         <p className="event-location">{location}</p>
//       </div>
//     </li>
//   )
// }

// export default EventItem
