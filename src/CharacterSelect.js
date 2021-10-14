const CharacterSelect = ({ characters, renderMain, renderOpp, mainChar, setUser, oppChar, setOpponent, handleSubmit, returnToTitle }) => {

    return (
        <>
            <div className="grid grid-cols-3 gap-4 font-cardo text-xl justify-items-end">
                <div className="flex flex-col m-4 w-4/6">
                    <label htmlFor="userCharacter" className="text-white text-4xl text-center font-uncial mb-2">Select your Character</label>
                    <select name="userCharacter" id="userCharacter" onChange={setUser} className="w-full">
                        <option value={null}>{null}</option>
                        <option value={characters[0].id}>{characters[0].name}</option>
                        <option value={characters[1].id}>{characters[1].name}</option>
                        <option value={characters[2].id}>{characters[2].name}</option>
                        <option value={characters[3].id}>{characters[3].name}</option>
                        <option value={characters[4].id}>{characters[4].name}</option>
                        <option value={characters[5].id}>{characters[5].name}</option>
                    </select>
                    {renderMain ? 
                        <div className="flex flex-col items-center bg-white border-2 border-blue-400 my-4">
                            <img src={mainChar.avatar} alt={mainChar.name} className="w-4/6 h-half my-2" />
                            <h2>{mainChar.name} the {mainChar.type}</h2>
                            <p>Attack: <span className="text-blue-600"><strong>{mainChar.attack}</strong></span></p>
                            <p>Defence: <span className="text-blue-600"><strong>{mainChar.defense}</strong></span></p>
                            <p>HP: <span className="text-blue-600"><strong>{mainChar.hp}</strong></span></p>
                        </div> 
                    : null}
                </div>
                <div className="flex self-center items-center justify-self-center flex-col font-uncial w-4/6">
                    <span className="flex text-5xl text-white" >Vs.</span>
                    {/* <button className="bg-plum-web my-2 p-2 rounded-md" onClick={handleSubmit}>Choose Random Opponent</button> */}
                </div>
                <div className="flex flex-col m-4 w-4/6 justify-self-start">
                    <label htmlFor="opponentCharacter" className="text-white text-4xl font-uncial text-center mb-2">Select your Opponent</label>
                    <select name="opponentCharacter" id="opponentCharacter" onChange={setOpponent} className="w-full">
                        <option value={null}>{null}</option>
                        <option value={characters[0].id}>{characters[0].name}</option>
                        <option value={characters[1].id}>{characters[1].name}</option>
                        <option value={characters[2].id}>{characters[2].name}</option>
                        <option value={characters[3].id}>{characters[3].name}</option>
                        <option value={characters[4].id}>{characters[4].name}</option>
                        <option value={characters[5].id}>{characters[5].name}</option>
                    </select>
                    {renderOpp ? 
                        <div className="flex flex-col items-center bg-white border-2 border-blue-400 my-4">
                            <img src={oppChar.avatar} alt={oppChar.name} className="w-4/6 h-half my-2"/>
                            <h2>{oppChar.name} the {oppChar.type}</h2>
                            <p>Attack: <span className="text-blue-600"><strong>{oppChar.attack}</strong></span></p>
                            <p>Defence: <span className="text-blue-600"><strong>{oppChar.defense}</strong></span></p>
                            <p>HP: <span className="text-blue-600"><strong>{oppChar.hp}</strong></span></p>
                        </div>    
                    : null}
                </div>
            </div>
            <div className="flex my-10 gap-10 text-dark-purple font-uncial text-2xl">
                <button className="bg-plum-web p-4 rounded-md hover:text-royal-gold hover:bg-dark-purple" onClick={returnToTitle}>Return to Title Screen</button>
                <button className="bg-plum-web p-4 rounded-md hover:text-royal-gold hover:bg-dark-purple" onClick={handleSubmit}>Begin battle!</button>
            </div>
        </>
    )
}

export default CharacterSelect