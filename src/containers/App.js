import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

class App extends Component {
    constructor() {
        super()
    //    Declare the state within constructor
    //Something that can change the app and lives in the parent component
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        //fetch is a tool on the window object that allows us to make requests
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
        //update state after fetch
        .then(users => this.setState({robots: users}))
    }
    //onSearchChange method to get user input
    onSearchChange = (event) => {
        //updates state searchfield to users input
        this.setState({ searchfield: event.target.value})
    }
    render() {
        //destructure properties to access within this.state
        const {robots, searchfield} = this.state
        //filter into new array the robots based on the searchfield state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        //add loading message if 'fetch' is still retrieving data
        //ternary operator to return 
        // if there is no length in array
        return (!robots.length) ?
            <h1 className="tc">Loading Robots...</h1> :
            (
        //else if has length then return
            <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            {/* Scrollable component */}
            {/* SearchBox has prop of searchChange method*/}
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <CardList robots={filteredRobots}/>
            </Scroll>
            </div>
        )
    }
}
export default App