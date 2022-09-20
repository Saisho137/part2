import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  //
  const addItem = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    if (persons.find(element => element.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }
  //
  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }
  const Display = ({ person, number }) => {
    return (
      <div>
        <p>{person}: {number}</p>
      </div>
    )
  }
  const Filter = ({ newSearch }) => {
    if (newSearch.length > 0) {
      return (
        persons.filter(element => element.name === newSearch)
          .map(person =>
            <Display key={person.name}
              person={person.name} number={person.number} />)
      )
    } else {
      return (
        persons.map(person =>
          <Display key={person.name}
            person={person.name} number={person.number} />)
      )
    }
  }
  //
  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        Filter shown with:
        <input
          value={newSearch}
          onChange={handleSearchChange}
        />
      </div>
      <form onSubmit={addItem}>
        <h2>Add a New Register</h2>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <br></br>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <br></br>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Filter newSearch={newSearch} />
    </div>
  )
}

export default App