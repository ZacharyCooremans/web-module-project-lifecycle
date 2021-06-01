import React from 'react'
import './App.css';
import axios from 'axios'
import UserCard from './components/UserCard';
import FriendCard from './components/FriendCard'
import styled from 'styled-components'

class App extends React.Component {
  state = {
    user: [],
    followers: [],
    name: ""
  }
  
  componentDidMount(name) {
    axios
    .get('https://api.github.com/users/ZacharyCooremans')
    .then((res) => {
      this.setState({
        ...this.state, user: res.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
    
    axios
    .get('https://api.github.com/users/ZacharyCooremans/followers')
    .then((res) => {
      console.log(res)
      this.setState({
        followers: res.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
    
    // axios
    // .get(`https://api.github.com/users/`)
    // .then((res) => {
      //   console.log('All user',res)
      // })
      // .catch((err) => {
        //   console.log(err)
        // })
      }
      
      iterateFunction = (login) => {
        axios
        .get(`https://api.github.com/users/${login}`)
        .then((res) => {
          this.setState({
            followers: res.data
          })
        })
        .catch((err) => {
          console.log(err)
        })
      }
      
      changeHandler = (e) => {
        this.setState({
          name: e.target.value
        })
      }
      
      handleSubmit = (e) => {
        e.preventDefault()
        axios
        .get(`https://api.github.com/users/${this.state.name}`)
        .then((res) => {
          this.setState({
            user: res.data
          })
          axios
          .get(`https://api.github.com/users/${this.state.name}/followers`)
          .then((res) => {
            this.setState({
              followers: res.data
            })
          })
          .catch((err) => {
            console.log(err)
          })
        })
        .catch((err) => {
          console.log(err)
        })
      }
      
      render() {
    return (
      <Page className="App">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.name} onChange={this.changeHandler}/>
          <button>Search</button>
        </form>
        <UserCard user={this.state.user}/>
        <Card>
          {
            this.state.followers.map(person=> {
              return <div>
                <FriendCard key={person.id} person={person}/>
              </div>
            })
          }
        </Card>
      </Page>
    );
  }
}

export default App;

const Page = styled.div`
  background-color: #306ccf
`
const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-evenly;

`
