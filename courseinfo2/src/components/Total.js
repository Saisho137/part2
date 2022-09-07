const Total = ({parts}) => {
  const ttl = parts.reduce(
    (s, p) => s + p.exercises,0)
  return (
    <p><strong>Total of Excercises: {ttl}</strong></p>
  )
}
export default Total