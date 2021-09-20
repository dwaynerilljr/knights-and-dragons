import { useState } from "react";



const CharacterSelect = (props) => {
    const [characters, setCharacter] = useState(props.characters)

    const hello = () => {
        setCharacter(characters);
    }

    const handleSubmit = (e) => {
        alert(e.target)
        e.preventDefault();
    }

    return (
        <>
            <header className="text-center text-white text-5xl font-uncial">Select your Character</header>
            <div className="grid grid-cols-6 gap-4 font-cardo text-xl items-center">
                {characters.map((character) => {
                    return (
                        <div key={character.id}>
                            <div className="flex flex-col text-center bg-white border-2 border-blue-400 p-2 my-8">
                                <img src={character.avatar} alt={character.name} />
                                <h2>{character.name} the {character.type}</h2>
                                <p>Attack: <span className="text-blue-600"><strong>{character.attack}</strong></span></p>
                                <p>Defence: <span className="text-blue-600"><strong>{character.defense}</strong></span></p>
                                <p>HP: {character.hp}</p>
                                <form action="submit" onSubmit={handleSubmit} className="flex flex-col" id="characterSelect">
                                    <span className="mt-3"><strong>Select {character.name}?</strong></span>
                                    <select name="" id="" className="border-2 border-green-300 rounded-sm self-center w-1/2">
                                        <option value="selected-character">Yes</option>
                                        <option selected="selected" value="null">No</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    )})}
            </div>
            <div className="flex justify-center">
                <button form="characterSelect" onClick={hello} type="submit" className="bg-green-600 text-2xl flex hover:bg-green-800 p-2 font-uncial text-white w-1/6">Battle with these Characters</button>
            </div>
        </>
    )
}

export default CharacterSelect