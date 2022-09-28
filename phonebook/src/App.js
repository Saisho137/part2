import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3002/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
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
  const handleSearchChange = (event) => {
    //console.log(event.target.value)
    setNewSearch(event.target.value)
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
      <Filter newSearch={newSearch} persons={persons} />
      </div>
      <h2>Add a New Register</h2>
      <PersonForm setNewName={setNewName} setNewNumber={setNewNumber} 
      addItem={addItem} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App