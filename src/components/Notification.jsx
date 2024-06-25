const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='error, addError'>
        {message}
      </div>
    )
}

export default Notification