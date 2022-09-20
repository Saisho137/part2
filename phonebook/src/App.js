import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '3113953908' } ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  //
  const addItem = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    if (persons.find(element => element.name === newName)){
      alert(`${newName} is already added to phonebook`)
    } else{
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
  const Display = ({person, number}) => {
    return (
      <div>
      <p>{person}: {number}</p>
      </div>
    )
  } 
  //
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addItem}>
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
      {persons.map( person => 
      <Display key={person.name} 
      person={person.name} number={person.number}/>)}
    </div>
  )
}

export default App