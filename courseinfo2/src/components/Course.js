import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ course }) => (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total parts={course.parts} />
    </div>
)
export default Course