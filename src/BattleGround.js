import { useState } from "react";

const BattleGround = ({ characters, returnToSelect }) => {
    const [characterIndex, setCharacterIndex] = useState(0);
    const [opponent, setOpponent] = useState(false);

    const userCharacter = characters[0];

    const opponentCharacter = characters[characterIndex]

    const renderOpponent = () => {
        setCharacterIndex(Math.floor(Math.random() * 6));
        setOpponent(!opponent);
    }


    return (
        <>
            <div className="grid grid-cols-3 gap-10 font-cardo text-2xl justify-items-center">
                <div className="flex flex-col justify-center bg-white p-4">
                    <img src={userCharacter.avatar} alt={userCharacter.name} className="w-full" />
                    <h2>{userCharacter.name} the {userCharacter.type}</h2>
                    <p>Attack: <span className="text-blue-600"><strong>{userCharacter.attack}</strong></span></p>
                    <p>Defence: <span className="text-blue-600"><strong>{userCharacter.defense}</strong></span></p>
                    <p>HP: <span className="text-blue-600"><strong>{userCharacter.hp}</strong></span></p>
                </div>
                <span className="flex self-center text-5xl text-white" >Vs.</span>
                { opponent ? 
                    <div className="flex flex-col justify-center bg-white p-4">
                        <img src={opponentCharacter.avatar} alt={opponentCharacter.name} className="w-full" />
                        <h2>{opponentCharacter.name} the {opponentCharacter.type}</h2>
                        <p>Attack: <span className="text-blue-600"><strong>{opponentCharacter.attack}</strong></span></p>
                        <p>Defence: <span className="text-blue-600"><strong>{opponentCharacter.defense}</strong></span></p>
                        <p>HP: <span className="text-blue-600"><strong>{opponentCharacter.hp}</strong></span></p>
                    </div>
                : null}
            </div>
            <div className="flex my-10 gap-10 text-dark-purple font-uncial text-2xl">
                <button className="bg-plum-web p-4 rounded-sm" onClick={returnToSelect}>Return to Select Character</button>
                <button className="bg-plum-web p-4 rounded-sm" onClick={renderOpponent}>Select Random Opponent</button>
            </div>
        </>
    )
}

export default BattleGround