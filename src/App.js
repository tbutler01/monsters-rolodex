import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'
import { useEffect, useState } from 'react';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase()));

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  }, []);
  return (
    <div className="App">
    <h1> Monsters Rolodex </h1>
    <SearchBox
      placeholder='search monsters'
      handleChange={e => setSearchField(e.target.value)}
    />
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
}

export default App;
