import React from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/serach-box/search-box';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {monsters: [], searchField: ''};
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = e => {
    this.setState({searchField : e.target.value})
  }

  render() {
    const filteredMonsters = this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters...' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}



export default App;
