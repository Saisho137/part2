import Display from "./Display"

const Filter = ({ newSearch, persons }) => {
    return (
      persons.filter(element => element.name.toUpperCase() 
      === newSearch.toUpperCase())
        .map(person =>
          <Display key={person.name}
            person={person.name} number={person.number} />)
    )
}
export default Filter