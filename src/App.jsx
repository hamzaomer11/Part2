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

/**************************************** Exercise 2.13 ********************************************* 

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

*/

/*************************************** Exercise 2.14 **********************************************

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
      id: (persons.length + 1).toString(),
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

  const deleteName = id => {
    const findPerson = persons.filter(person => person.id === id)[0].name;
    if(confirm(`Delete ${findPerson}?`) === true) {
      personService
      .deleteObject(id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id));
        console.log(persons, 'What is going on here??')
        console.log(response.data, 'This is response data')
    })
      .catch(error => {
        console.log('Error deleting message: ', error.message)
    })
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
            <Person name={person.name} number={person.number} key={person.id} deleteName={() => deleteName(person.id)}/>
          )}
      </div>
    </div>
  )
}

export default App

*/

/*************************************** Exercise 2.15 **********************************************

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

    const namePresent = persons.find(person => newName.toLowerCase() === person.name.toLowerCase());

    const nameObject = {
      name: newName,
      number: newPhone,
      id: (persons.length + 1).toString(),
    }

    if(namePresent) {
      const confirmed = window.confirm(`${namePresent.name} is already added to phonebook`)

      if(!confirmed) {
        return;
      }

      personService
      .update(namePresent.id, nameObject)
      .then((updatedPersons => {
        setPersons((prevPerson => {
          prevPerson.id === namePresent.id ? updatedPersons : persons
        }));
        setNewFilter((prevFilteredPerson => {
          prevFilteredPerson.id === namePresent.id ? updatedPersons : persons
        }));
        location.reload();
      }))
    } else {

      personService
      .create(nameObject)
      .then(response => {
      setPersons(persons.concat(nameObject))
      console.log(persons, 'Checking persons array')
      console.log(newName, 'Checking newName variable')
      console.log(response)
    });

    }
    setNewName('')
    setNewPhone('')

    const foundName = copyPersons.some(person => newName.toLowerCase() === person.name.toLowerCase());
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

  const deleteName = id => {
    const findPerson = persons.filter(person => person.id === id)[0].name;
    if(confirm(`Delete ${findPerson}?`) === true) {
      personService
      .deleteObject(id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id));
        console.log(persons, 'What is going on here??')
        console.log(response.data, 'This is response data')
    })
      .catch(error => {
        console.log('Error deleting message: ', error.message)
    })
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
            <Person name={person.name} number={person.number} key={person.id} deleteName={() => deleteName(person.id)}/>
          )}
      </div>
    </div>
  )
}

export default App

*/

/************************************ Exercise 2.16/2.17 ********************************************

import { useState, useEffect } from 'react'
import personService from './services/persons'
import Person from './components/Person'
import Notification from './components/Notification'
import './index.css'

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
  const [errorMessage, setErrorMessage] = useState('...')

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

    const namePresent = persons.find(person => newName.toLowerCase() === person.name.toLowerCase());

    const nameObject = {
      name: newName,
      number: newPhone,
      id: (persons.length + 1).toString(),
    }

    if(namePresent) {
      const confirmed = window.confirm(`${namePresent.name} is already added to phonebook`)

      if(!confirmed) {
        return;
      }

      personService
      .update(namePresent.id, nameObject)
      .then((updatedPersons => {
        setPersons((prevPerson => {
          prevPerson.id === namePresent.id ? updatedPersons : persons
        }));
        setNewFilter((prevFilteredPerson => {
          prevFilteredPerson.id === namePresent.id ? updatedPersons : persons
        }));
        location.reload();
      }))
        .catch(error => {
          setErrorMessage(
            `Name '${namePresent.name}' was already removed from server`
          )
          setPersons(persons.filter(person => person.id !== namePresent.id))
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          console.log(error.message)
        })
        setErrorMessage(`Updated '${nameObject.name}'`)
        setTimeout(() => {
        setErrorMessage(null)
      }, 10000)
    } else {
      personService
      .create(nameObject)
      .then(response => {
      setPersons(persons.concat(nameObject))
      console.log(persons, 'Checking persons array')
      console.log(newName, 'Checking newName variable')
      console.log(response)
      setErrorMessage(`Added '${nameObject.name}'`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })
    .catch(error => {
      setErrorMessage(
        `Name '${persons.name}' was already removed from server`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      console.log(error.message)
    })

    }
    setNewName('')
    setNewPhone('')

    const foundName = copyPersons.some(person => newName.toLowerCase() === person.name.toLowerCase());
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

  const deleteName = id => {
    const findPerson = persons.filter(person => person.id === id)[0].name;
    if(confirm(`Delete ${findPerson}?`) === true) {
      personService
      .deleteObject(id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id));
        console.log(persons, 'What is going on here??')
        console.log(response.data, 'This is response data')
    })
      .catch(error => {
        console.log('Error deleting message: ', error.message)
    })
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

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(newFilterName.toLowerCase())) 
  console.log(namesToShow, 'Filtered List Object')
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} newPhone={newPhone} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}/>
      <h2>Numbers</h2>
      <div>
          {namesToShow.map(person =>
            <Person name={person.name} number={person.number} key={person.id} deleteName={() => deleteName(person.id)}/>
          )}
      </div>
    </div>
  )
}

export default App

*/

/*************************************** Exercise 2.18/2.19 *****************************************

import {useState, useEffect} from 'react'
import axios from 'axios'
import Country from './components/Country'

const Filter = ({handleFilterChange}) => {
  return (
      <form>
            <div>
              find countries: <input onChange={handleFilterChange}/>
            </div>
      </form>
  )
}

const App = () => {

  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    console.log('effect')
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
        console.log(response.data, 'What to do here')
      })
  }, [])
  console.log('render', countries.length, 'countries')

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilterCountry(event.target.value)
  }

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(filterCountry.toLowerCase())) 
  console.log(countriesToShow, 'Does it Filter')

  const showLanguages = (languages) => {
    if(Array.isArray(languages)) {
      return languages.join(', ');
    } else if(typeof languages === 'object') {
      return Object.values(languages).join(', ');
    } else {
      return 'Unknown'
    }
  }

  const handleCountryData = (country) => {
    setSelectedCountry(country)
  }

  return (
    <div>
      <Filter handleFilterChange={handleFilterChange}/>
      <div>
        {countriesToShow.length > 10 && (
          <p>Too many matches, specify another filter</p>
        )}

        {countriesToShow.length <= 10 && countriesToShow.length > 1 && (
          <div>
            {countriesToShow.map((country) => 
            <div key={country.name.common}>
              {country.name.common}
              <button onClick={() => handleCountryData(country)}>Show</button>
            </div>
            )}
          </div>
        )}

        {countriesToShow.length === 1 && (
          countriesToShow.map((country) => 
            <Country name={country.name.common} 
            capital={country.capital} 
            area={country.area}
            languages={country.languages && showLanguages(country.languages)}
            flag={country.flags.png}
            key={country.flag}/>
        ))}

        {selectedCountry && ( 
            <div>
              <p>{selectedCountry.name.common}</p>
              <p>Capital: {selectedCountry.capital}</p>
              <p>Area: {selectedCountry.area}</p>
              <p>Language(s): 
                {selectedCountry.languages && showLanguages(selectedCountry.languages)}
              </p>
              <h3>Flag: </h3>
              <img src={selectedCountry.flags.png} alt={selectedCountry.name.common} />
            </div>
        )}
      </div>
    </div>
  )

}

export default App

*/

import {useState, useEffect} from 'react'
import axios from 'axios'

const Filter = ({handleFilterChange}) => {
  return (
      <form>
            <div>
              find countries: <input onChange={handleFilterChange}/>
            </div>
      </form>
  )
}

const App = () => {

  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [getWeather, setWeather] = useState(null)

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        setCountries(response.data)
      })
      .catch(error => {
        console.log(error.message)
      })
  }, [])
  console.log('render', countries.length, 'countries')

  const handleFilterChange = (event) => {
    setFilterCountry(event.target.value)
  }

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(filterCountry.toLowerCase())) 
  console.log(countriesToShow, 'Does it Filter')

  const showLanguages = (languages) => {
    if(Array.isArray(languages)) {
      return languages.join(', ');
    } else if(typeof languages === 'object') {
      return Object.values(languages).join(', ');
    } else {
      return 'Unknown'
    }
  }
  
const baseUrl = 'https://api.openweathermap.org'
const api_key = import.meta.env.VITE_WEATHER_API_KEY

useEffect(() => {
  const getWeatherInfo = async () => { 
    try {
      const response = await axios.get(`${baseUrl}/data/2.5/weather?q=${selectedCountry?.capital}&appid=${api_key}`)
      setWeather(response.data)
    } catch (error) {
      console.log(error.message, 'error for getWeatherInfo')
    }     
  }
  if (selectedCountry?.capital) {
    getWeatherInfo();
  }
}, [selectedCountry?.capital])

useEffect(() => {
  if(countriesToShow.length === 1) {
    setSelectedCountry(countriesToShow[0])
  }
}, [countriesToShow[0]])

const handleCountryData = (country) => {
  setSelectedCountry(country)
}

  return (
    <div>
      <Filter handleFilterChange={handleFilterChange}/>
      <div>
        {countriesToShow.length > 10 && (
          <p>Too many matches, specify another filter</p>
        )}

        {countriesToShow.length <= 10 && countriesToShow.length > 1 && (
          <div>
            {countriesToShow.map((country) => 
            <div key={country.name.common}>
              {country.name.common}
              <button onClick={() => handleCountryData(country)}>Show</button>
            </div>
            )}
          </div>
        )}

        {selectedCountry && ( 
            <div>
              {console.log(selectedCountry, 'da real deal')}
              <p>{selectedCountry.name.common}</p>
              <p>Capital: {selectedCountry.capital}</p>
              <p>Area: {selectedCountry.area}</p>
              <p>Language(s): 
                {selectedCountry.languages && showLanguages(selectedCountry.languages)}
              </p>
              <h3>Flag: </h3>
              <img src={selectedCountry.flags.png} alt={selectedCountry.name.common} />
              {getWeather && (
                <div>
                  <h4>Weather in {selectedCountry.capital}</h4>
                  <p>temprature {getWeather.main.temp}°C</p>
                  <img src={`https://openweathermap.org/img/wn/${getWeather.weather[0].icon}@2x.png`} alt={getWeather.weather[0].description} />
                  <p>wind {getWeather.wind.speed} m/s</p>
                </div>
              )}
            </div>
        )}
      </div>
    </div>
  )

}

export default App