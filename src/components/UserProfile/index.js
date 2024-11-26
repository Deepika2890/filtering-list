import './index.css'


const UserProfile = (props) => {
    const {userDetails, onDeleteUser} = props
    const {name, imageUrl, role, uniqueNo} = userDetails
    const onDelete = () => {
        onDeleteUser(uniqueNo)
    }
    return(
        <div className='user-container'>
          <img src= {imageUrl} alt='avatar' className='image'/>
          <div>
            <h1 className='heading'>{name}</h1>
            <p className='role'>{role}</p>
          </div>
          <button type='button' className='delete-btn' onClick={onDelete}>
           <img src='https://assets.ccbp.in/frontend/react-js/cross-img.png' alt='cross' className='delete-image'/>
          </button>
        </div>
    )
}

export default UserProfile