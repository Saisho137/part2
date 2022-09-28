const PersonForm = ({setNewName,setNewNumber,addItem,newName,newNumber}) => {
    const handleNameChange = (event) => {
      setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
    }
    
    return(
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
    )
}
export default PersonForm