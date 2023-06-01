// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="no-active-event-description">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistrationsClosedView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="register-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-here-button">
        Register Here
      </button>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationsClosed:
        return renderRegistrationsClosedView()
      default:
        return renderNoActiveEventView()
    }
  }

  return (
    <div className="registration-status-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails

// import './index.css'

// const registrationStatusConstants = {
//   completed: 'REGISTERED',
//   inProgress: 'YET_TO_REGISTER',
//   closed: 'REGISTRATIONS_CLOSED',
// }

// const ActiveEventRegistrationDetails = props => {
//   const {activeStatus} = props

//   const registeredUser = () => (
//     <div className="container">
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
//         alt="registered"
//         className="registered-image"
//       />
//       <h1 className="registered-user">
//         You have already registered for the event
//       </h1>
//     </div>
//   )

//   const registrationsOpen = () => (
//     <div className="container">
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
//         alt="yet to register"
//         className="registrations-open-img"
//       />
//       <p className="registrations-open-para">
//         A live performance brings so much to your relationship with dance.
//         Seeing dance live can make you fall totally in love with this beautiful
//         art form.
//       </p>
//       <button type="button" className="registrations-open-button">
//         Register Here
//       </button>
//     </div>
//   )

//   const registrationClosed = () => (
//     <div className="container">
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
//         alt="registrations closed"
//         className="registrations-closed-img"
//       />
//       <h1 className="registrations-closed-heading">
//         Registrations Are Closed Now!
//       </h1>
//       <p className="registrations-closed-para">
//         Stay tuned. we will reopen the registrations soon!
//       </p>
//     </div>
//   )

//   const registration = () => (
//     <div className="container1">
//       <p className="registration">
//         Click on an event, to view its registration details
//       </p>
//     </div>
//   )

//   const renderTheRegistration = () => {
//     switch (activeStatus) {
//       case registrationStatusConstants.closed:
//         return registrationClosed()
//       case registrationStatusConstants.completed:
//         return registeredUser()
//       case registrationStatusConstants.inProgress:
//         return registrationsOpen()
//       default:
//         return registration()
//     }
//   }

//   return renderTheRegistration()
// }

// export default ActiveEventRegistrationDetails
