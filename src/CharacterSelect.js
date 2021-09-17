import { useState } from "react";



const CharacterSelect = (props) => {
    const [characters, setCharacter] = useState(props.characters)

    return (
        <>
            <header className="text-center text-white text-5xl font-uncial">Select your Character</header>
            <div className="grid grid-cols-6 gap-4 font-cardo text-xl items-center">
                {characters.map((character) => {
                    return (
                        <div key={character.id}>
                            <div className="flex flex-col text-center bg-white border-2 border-blue-400 p-2 my-8">
                                <img src={character.avatar} />
                                <h2>{character.name} the {character.type}</h2>
                                <p>Attack: <span className="text-blue-600"><strong>{character.attack}</strong></span></p>
                                <p>Defence: <span className="text-blue-600"><strong>{character.defense}</strong></span></p>
                                <p>HP: {character.hp}</p>
                                <button className="bg-green-600 rounded-md hover:bg-green-800 p-2 font-uncial text-white">Select {character.name}</button>
                            </div>
                        </div>
                    )})}
            </div>
            <button className="bg-green-600 flex hover:bg-green-800 p-2 font-uncial text-white">Fight with these Characters</button>
        </>
    )
}

export default CharacterSelect