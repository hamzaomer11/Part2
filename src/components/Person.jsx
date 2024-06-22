const Person = ({name, number, deleteName}) => {

    return (
        <div>
            <p>
            {name} {number}
            <button onClick={() => deleteName}> Delete </button>
            </p>
        </div>
    )
}

export default Person