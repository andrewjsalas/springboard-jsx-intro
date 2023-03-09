function App() {
    return (
        <>
            <Person 
                name="Ross"
                age={31}
                hobbies={["dinosaurs", "slide shows", "puzzles"]}
            />
            <Person 
                name="Chandler"
                age={30}
                hobbies={["data processing", "jokes", "bay watch"]}
            />
            <Person 
                name="Joey"
                age={29}
                hobbies={["food", "foosball", "bay watch"]}
            />
        </>
    )
}