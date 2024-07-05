const Country = ({name, capital, area, languages, flag}) => {

    return (
        <div>
            <h3>{name}</h3> 
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <p>Language(s): {languages}</p>
            <img src={flag} alt={name} />
        </div>
    )
}

export default Country