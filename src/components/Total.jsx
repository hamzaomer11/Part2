const Total = ({ parts }) => {
    return (
      <p><b>
        total of {parts.reduce((sum, p) => sum + p.exercises, 0)} exercises
      </b></p>
    )
}

export default Total