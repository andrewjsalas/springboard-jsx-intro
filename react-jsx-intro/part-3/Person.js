function Person(props) {
    let voteText = props.age >= 18 ? "Go vote!" : "Go study like the dude from Good Will Hunting(Even though he didn't actually study since he was a genius, but still.)!";
    let hobbies = props.hobbies.map(h => <li>{ hobby }</li>);

    return (
        <>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {props.name.slice(0, 6)}</li>
                <li>Age: {props.age}</li>
            </ul>
            <ul>
                <li>Hobbies: {hobbies}</li>
            </ul>
            <h3>{voteText}</h3>
        </>
    )
}