const Home = ({sampleData}) => {
    const { id, name, age } = sampleData;
    console.table(sampleData)

    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}

export default Home;