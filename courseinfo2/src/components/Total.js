const Total = (props) => {
    return(
        <p><strong>Total of Excercises: { props.course.parts[0].exercises + 
        props.course.parts[1].exercises + props.course.parts[2].exercises }
        </strong></p>
    )
}
export default Total