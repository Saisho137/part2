import Display from "./Display"

const Persons = ({persons}) => {
    return(
      persons.map(person =>
        <Display key={person.name}
          person={person.name} number={person.number} />)
    )
}
export default Persons