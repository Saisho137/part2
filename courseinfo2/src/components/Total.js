const Total = ({parts}) => {
  const ttl = parts.reduce(
    (s, p) => s + p.exercises,0)
  return (
    <p>Total of Excercises: {ttl}</p>
  )
}
export default Total