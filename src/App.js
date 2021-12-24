import React from 'react';
import CardList from './components/card-list/card-list';
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

  render() {
    const filteredMonsters = this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
    return (
      <div className='App'>
        <input type='search' placeholder='search monsters...' onChange={e => this.setState({searchField : e.target.value})} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}



export default App;
