const Person = ({id, name, number, deleteName}) => {

    return (
        <div>
            {name} {number} <button onClick={() => deleteName(id)}> Delete </button>
        </div>
    )
}

export default Person