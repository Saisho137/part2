import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' } ]) 
  const [ newName, setNewName ] = useState('')
  //
  const addItem = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName
    }
    if (persons.find(element => element.name === newName)){
      alert(`${newName} is already added to phonebook`)
    } else{
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
  }
  //
  const handleItemChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }
  const Display = ({person}) => {
    return (
      <div>
      <p>{person}</p>
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
            onChange={handleItemChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map( person => 
      <Display key={person.name} person={person.name}/>)}
    </div>
  )
}

export default App