function App() {
    return (
        <>
            <Tweet 
                name="Jon Jones"
                username="bonesjones"
                date={new Date().toDateString()}
                message="After three years, I am once again the greatest UFC fighter of all time after my Heavyweight win."
            />
            <Tweet
                name="Dana White"
                username="theRealDanaWhite"
                date={new Date().toDateString()}
                message="Cyrl Gane's a good kid. He fought hard, but just couldn't beat the GOAT."
            />
            <Tweet
                name="Conor Mcgregor"
                username="TheNotorious" 
                date={new Date().toDateString()}
                message="I don't care who he beats, I would have beaten Jon Jones no problem!"
            />
        </>
    )
}