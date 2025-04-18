import Header from "./src/components/Header"
import Entry from "./src/components/Entry"
import travelData from "./data"

export default function App() {
    const travelEntry = travelData.map((entry) => {
        return <Entry 
                    key={entry.id}
                    {...entry}
                    />
    })
    return (
        <>
            <Header />
            <main className="container">
                {travelEntry}
            </main>
        </>
        
    )
}
