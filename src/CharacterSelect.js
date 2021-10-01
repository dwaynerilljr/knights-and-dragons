

const CharacterSelect = ({ characters, battleSelect, mainChar, handleChange, handleSubmit, returnToTitle }) => {

    return (
        <>
            <div className="grid grid-cols-1 gap-4 font-cardo text-xl justify-items-center">
                <label htmlFor="userCharacter" className="text-white text-5xl font-uncial">Select your Character</label>
                <select name="userCharacter" id="userCharacter" onChange={handleChange} className="w-full">
                    <option value={characters[0].id}>{characters[0].name}</option>
                    <option value={characters[1].id}>{characters[1].name}</option>
                    <option value={characters[2].id}>{characters[2].name}</option>
                    <option value={characters[3].id}>{characters[3].name}</option>
                    <option value={characters[4].id}>{characters[4].name}</option>
                    <option value={characters[5].id}>{characters[5].name}</option>
                </select>
                <div className="flex flex-col text-center bg-white border-2 border-blue-400 p-2 my-8 w-4/6">
                    <img src={mainChar.avatar} alt={mainChar.name} />
                    <h2>{mainChar.name} the {mainChar.type}</h2>
                    <p>Attack: <span className="text-blue-600"><strong>{mainChar.attack}</strong></span></p>
                    <p>Defence: <span className="text-blue-600"><strong>{mainChar.defense}</strong></span></p>
                    <p>HP: <span className="text-blue-600"><strong>{mainChar.hp}</strong></span></p>
                </div>
            </div>
            <div className="flex my-10 gap-10 text-dark-purple font-uncial text-2xl">
                <button className="bg-plum-web p-4 rounded-sm" onClick={returnToTitle}>Return to Title Screen</button>
                <button className="bg-plum-web p-4 rounded-sm" onClick={handleSubmit}>Battle with this character</button>
            </div>
        </>
    )
}

export default CharacterSelect