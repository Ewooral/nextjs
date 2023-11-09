import PokeManStyle from "@/styles/style.module.css"
import pokemon from "@/data/pokeman.json"
const PokeManApp = () => {
    return (
        <div
            style={{
                margin: "auto",
                width: 800,
                paddingTop: "1rem"
            }}
        >
            <h1 className={PokeManStyle["title"]}>Pokemon Search</h1>
            <table width="100%">
                <thead>
                <tr className={PokeManStyle["PokeMan"]}>
                    <th>Name</th>
                    <th>Type</th>
                </tr>
                </thead>
                <tbody>
                {pokemon.map((pokemon, id) => (
                    <tr key={id}>
                        <td>{pokemon.name.english}</td>
                        <td>{pokemon.type.join(", s")}</td>
                    </tr>
                ))}

                </tbody>
            </table>

        </div>
    )
}

export default PokeManApp