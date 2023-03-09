function Tweet(props) {
    return (
        <>
            <h4>{props.name}</h4>
            <h3>{props.username}</h3>
            <p>{props.date}</p>
            <p>{props.message}</p>
        </>
    );
}