/******************************************* Exercise 2.1 ****************************************

const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part}/>
      ))}
    </div>
  );
} 

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App

*/

/************************************* Exercises 2.2 & 2.3*************************************

const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
    return (
      <p> 
        total of {parts.reduce((sum, p) => sum + p.exercises, 0)} exercises
      </p>
    )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part}/>
      ))}
    </div>
  );
} 

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App 

*/

/************************************************ Exercise 2.4 **************************************
const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
    return (
      <p><b>
        total of {parts.reduce((sum, p) => sum + p.exercises, 0)} exercises
      </b></p>
    )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part}/>
      ))}
    </div>
  );
} 

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map((course) => 
        <Course key={course.id} course={course}/>
      )}
    </div>
  )
}

export default App

*/

/************************************************** Exercise 2.5 **************************************

import Course from "./components/Course"

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map((course) => 
        <Course key={course.id} course={course}/>
      )}
    </div>
  )
}

export default App

*/

/**************************************** Exercise 2.6 **********************************************

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newName,
      important: Math.random() < 0.5,
      id: persons.length + 1,
  }
    setPersons(persons.concat(nameObject))
    console.log(persons, 'Checking persons array')
    setNewName('')
    console.log(newName, 'Checking newName variable')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <p key={person.id}>{person.content}</p>
        )}
      </div>
    </div>
  )
}

export default App

*/

/******************************************** Exercise 2.7 **************************************** 

import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const copyPersons = [...persons];

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      id: persons.length + 1,
      name: newName
    }
    setPersons(persons.concat(nameObject))
    console.log(persons, 'Checking persons array')
    setNewName('')
    console.log(newName, 'Checking newName variable')
    
    const foundName = copyPersons.some(person => newName === person.name);
    console.log(foundName, 'display object equality check')
    if(!foundName) {
      copyPersons.push(newName)
      console.log(copyPersons)
    } else {
      alert(`${newName} is already added to phonebook`)
      setPersons(persons)
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
          {persons.map(person =>
            <Person key={person.id} name={person.name}/>
          )}
      </div>
    </div>
  )
}

export default App

*/

/****************************************** Exercise 2.8 ********************************************** 

import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', phone: '07792748285' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const copyPersons = [...persons];

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      id: persons.length + 1,
      name: newName,
      phone: newPhone
    }
    setPersons(persons.concat(nameObject))
    console.log(persons, 'Checking persons array')
    setNewName('')
    console.log(newName, 'Checking newName variable')
    
    const foundName = copyPersons.some(person => newName === person.name);
    console.log(foundName, 'display object equality check')
    if(!foundName) {
      copyPersons.push(newName)
      console.log(copyPersons)
    } else {
      alert(`${newName} is already added to phonebook`)
      setPersons(persons)
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
          {persons.map(person =>
            <Person key={person.id} name={person.name} phone={person.phone}/>
          )}
      </div>
    </div>
  )
}

export default App

*/