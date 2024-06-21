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

/*************************************** Exercise 2.9 **********************************************

import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilterName, setNewFilter] = useState('')

  const copyPersons = [...persons];

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newPhone,
      id: persons.length + 1
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
    console.log(copyPersons)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(newFilterName.toLowerCase())) 
  console.group(namesToShow, 'Filtered List Object')
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with: <input onChange={handleFilterChange}/>
        </div>
      </form>
      <h2>add a new</h2>
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
          {namesToShow.map(person =>
            <Person name={person.name} number={person.number} key={person.id}/>
          )}
      </div>
    </div>
  )
}

export default App

*/

/**************************************** Exercise 2.10 ******************************************* 

import { useState } from 'react'
import Person from './components/Person'

const PersonForm = ({addName, newName, newPhone, handleNameChange, handlePhoneChange}) => {
  return (
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
  )
}

const Filter = ({handleFilterChange}) => {
  return (
      <form>
            <div>
              filter shown with: <input onChange={handleFilterChange}/>
            </div>
      </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilterName, setNewFilter] = useState('')

  const copyPersons = [...persons];

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newPhone,
      id: persons.length + 1
    }
    setPersons(persons.concat(nameObject))
    console.log(persons, 'Checking persons array')
    setNewName('')
    setNewPhone('')
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
    console.log(copyPersons)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(newFilterName.toLowerCase())) 
  console.group(namesToShow, 'Filtered List Object')
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} newPhone={newPhone} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}/>
      <h2>Numbers</h2>
      <div>
          {namesToShow.map(person =>
            <Person name={person.name} number={person.number} key={person.id}/>
          )}
      </div>
    </div>
  )
}

export default App

*/

/***************************************** Exercise 2.11 *********************************************

import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'

const PersonForm = ({addName, newName, newPhone, handleNameChange, handlePhoneChange}) => {
  return (
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
  )
}

const Filter = ({handleFilterChange}) => {
  return (
      <form>
            <div>
              filter shown with: <input onChange={handleFilterChange}/>
            </div>
      </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilterName, setNewFilter] = useState('')

  const copyPersons = [...persons];

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newPhone,
      id: persons.length + 1
    }
    setPersons(persons.concat(nameObject))
    console.log(persons, 'Checking persons array')
    setNewName('')
    setNewPhone('')
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
    console.log(copyPersons)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(newFilterName.toLowerCase())) 
  console.group(namesToShow, 'Filtered List Object')
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} newPhone={newPhone} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}/>
      <h2>Numbers</h2>
      <div>
          {namesToShow.map(person =>
            <Person name={person.name} number={person.number} key={person.id}/>
          )}
      </div>
    </div>
  )
}

export default App

*/

/***************************************** Exercise 2.12 *********************************************

import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'

const PersonForm = ({addName, newName, newPhone, handleNameChange, handlePhoneChange}) => {
  return (
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
  )
}

const Filter = ({handleFilterChange}) => {
  return (
      <form>
            <div>
              filter shown with: <input onChange={handleFilterChange}/>
            </div>
      </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilterName, setNewFilter] = useState('')

  const copyPersons = [...persons];

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newPhone,
      id: persons.length + 1
    }

    axios
    .post('http://localhost:3001/persons', nameObject)
    .then(response => {
      setPersons(persons.concat(nameObject))
      console.log(persons, 'Checking persons array')
      setNewName('')
      setNewPhone('')
      console.log(newName, 'Checking newName variable')
      console.log(response)
    })

    const foundName = copyPersons.some(person => newName === person.name);
    console.log(foundName, 'display object equality check')
    if(!foundName) {
      copyPersons.push(newName)
      console.log(copyPersons)
    } else {
      alert(`${newName} is already added to phonebook`)
      setPersons(persons)
    }
    console.log(copyPersons)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(newFilterName.toLowerCase())) 
  console.log(namesToShow, 'Filtered List Object')
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} newPhone={newPhone} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}/>
      <h2>Numbers</h2>
      <div>
          {namesToShow.map(person =>
            <Person name={person.name} number={person.number} key={person.id}/>
          )}
      </div>
    </div>
  )
}

export default App

*/

import { useState, useEffect } from 'react'
import personService from './services/persons'
import Person from './components/Person'

const PersonForm = ({addName, newName, newPhone, handleNameChange, handlePhoneChange}) => {
  return (
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
  )
}

const Filter = ({handleFilterChange}) => {
  return (
      <form>
            <div>
              filter shown with: <input onChange={handleFilterChange}/>
            </div>
      </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilterName, setNewFilter] = useState('')

  const copyPersons = [...persons];

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newPhone,
      id: persons.length + 1
    }

    personService
    .create(nameObject)
    .then(response => {
      setPersons(persons.concat(nameObject))
      console.log(persons, 'Checking persons array')
      setNewName('')
      setNewPhone('')
      console.log(newName, 'Checking newName variable')
      console.log(response)
    })

    const foundName = copyPersons.some(person => newName === person.name);
    console.log(foundName, 'display object equality check')
    if(!foundName) {
      copyPersons.push(newName)
      console.log(copyPersons)
    } else {
      alert(`${newName} is already added to phonebook`)
      setPersons(persons)
    }
    console.log(copyPersons)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(newFilterName.toLowerCase())) 
  console.log(namesToShow, 'Filtered List Object')
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} newPhone={newPhone} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}/>
      <h2>Numbers</h2>
      <div>
          {namesToShow.map(person =>
            <Person name={person.name} number={person.number} key={person.id}/>
          )}
      </div>
    </div>
  )
}

export default App