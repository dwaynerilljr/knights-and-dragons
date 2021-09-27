const CharacterSelect = ({ characters, battleSelect, returnToTitle }) => {

    const handleSubmit = (e) => {
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
                                <p>HP: <span className="text-blue-600"><strong>{character.hp}</strong></span></p>
                                <form action="submit" onSubmit={handleSubmit} className="flex items-center justify-center align-items-center" id="characterSelect">
                                    <span className="mr-1"><strong>Select {character.name}?</strong></span>
                                    <input type="checkbox" name="" value={character.id} id="charCheck" />
                                </form>
                            </div>
                        </div>
                    )})}
            </div>
            <div className="flex my-10 gap-10 text-dark-purple font-uncial text-2xl">
                <button className="bg-plum-web p-4 rounded-sm" onClick={returnToTitle}>Return to Title Screen</button>
                <button className="bg-plum-web p-4 rounded-sm" onClick={battleSelect}>Battle with this character</button>
            </div>
        </>
    )
}

export default CharacterSelect