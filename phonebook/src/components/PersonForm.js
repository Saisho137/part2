const PersonForm = ({setNewName,setNewNumber,addItem,newName,newNumber}) => {
    const handleNameChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
      console.log(event.target.value)
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