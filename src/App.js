const Header = (props) =>{
  console.log(props)
  return (
    <div>
    <h1>{props.course.name}</h1>
    </div>
  )
} 
const Content = (props) => {
  
  return(
    <>
      <Part data={props.course.parts[0]} />
      <Part data={props.course.parts[1]} />
      <Part data={props.course.parts[2]} />
    </>
  )
}
const Part = (props) => {
  return(
    <>
      <p>{props.data.name} {props.data.exercises}</p>
    </>
  )

}
const Total = (props) => {
  return(
  <>
    <p>Number of exercise {props.course.parts[0].exercises+props.course.parts[1].exercises+props.course.parts[2].exercises}</p>
  </>
  ) 
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />       
    </div>
  )
}



export default App