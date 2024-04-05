const Results = ({ results }) => {
    return (
        <ul>
            {results.map((result) => {
                return <li><a href={`/profile/${result.id}`}>User {result.id} - {result.username} - {result.email}</a></li>
            })}
        </ul>
    )
}

export default Results;