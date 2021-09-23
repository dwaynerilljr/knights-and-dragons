import { useState } from "react";



const CharacterSelect = (props) => {
    const [characters, setCharacters] = useState();
    const characterArray = [];
    const [selectedCharacter, setSelectedCharacter] = useState([]);

    const handleSelect = (e) => {
        if (e.target.checked) {
            setSelectedCharacter()
            alert(characterArray);
        } else {
            alert('keep trying!');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <header className="text-center text-white text-5xl font-uncial">Select your Character</header>
            <div className="grid grid-cols-6 gap-4 font-cardo text-xl items-center">
                {props.characters.map((character) => {
                    return (
                        <div key={character.id}>
                            <div className="flex flex-col text-center bg-white border-2 border-blue-400 p-2 my-8">
                                <img src={character.avatar} alt={character.name} />
                                <h2>{character.name} the {character.type}</h2>
                                <p>Attack: <span className="text-blue-600"><strong>{character.attack}</strong></span></p>
                                <p>Defence: <span className="text-blue-600"><strong>{character.defense}</strong></span></p>
                                <p>HP: <span className="text-blue-600"><strong>{character.hp}</strong></span></p>
                                <form action="submit" onSubmit={handleSubmit} className="flex items-center justify-center align-items-center" id="characterSelect">
                                    <span className="mr-1"><strong>Select {character.name}?</strong></span>
                                    <input type="checkbox" name="" value={character.id} id="charCheck" onChange={handleSelect} />
                                </form>
                            </div>
                        </div>
                    )})}
            </div>
            <div className="flex justify-center">
                <button form="characterSelect" onClick={handleSelect} type="submit" className="bg-green-600 text-2xl flex hover:bg-green-800 p-2 font-uncial text-white w-1/6">Battle with these Characters</button>
            </div>
        </>
    )
}

export default CharacterSelect