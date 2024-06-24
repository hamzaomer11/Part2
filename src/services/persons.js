import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = nameObject => {
  return axios.post(baseUrl, nameObject)
}

const update = (id, nameObject) => {
  return axios.put(`${baseUrl}/${id}`, nameObject)
}

const deleteObject = id => {
  return axios.delete(`${baseUrl}/${id}`)
}

export default { 
  getAll, 
  create, 
  update,
  deleteObject
}