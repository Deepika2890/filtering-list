import {Component} from 'react'
import './App.css'
import UserProfile from './components/UserProfile'


const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer'
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer'
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer'
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer'
  },
  {
    uniqueNo: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Sriram kl',
    role: 'MERN Developer'
  },
  {
    uniqueNo: 6,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Ashiwini ',
    role: 'Software Developer'
  },
  {
    uniqueNo: 7,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Akhila',
    role: 'Software Developer'
  },
  {
    uniqueNo: 8,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Nandhini',
    role: 'Software Developer'
  }
]


class App extends Component {
  state = {searchInput:'', userDetailsList:initialUserDetailsList}
  onChangeSearchInput = (event) => {
    this.setState({searchInput:event.target.value})
  }
  onDeleteUser = (uniqueNo) => {
    const {userDetailsList} = this.state
    const filteredUserDetailsList = userDetailsList.filter(user => user.uniqueNo !== uniqueNo)
    this.setState({userDetailsList:filteredUserDetailsList}) 
  }

  render(){
    const {searchInput, userDetailsList} = this.state
    const searchResult  = userDetailsList.filter(each=>each.name.includes(searchInput))
    return(
      <div className='app-container'>
        <h1>User Details List</h1>
        <input type='search' className='search-input' value = {searchInput} onChange = {this.onChangeSearchInput}/>
        {
          searchResult.map(eachUser=>
            <UserProfile userDetails = {eachUser} key = {eachUser.uniqueNo} onDeleteUser = {this.onDeleteUser}/>
          )
        }
      </div>
    )
  }
}

export default App