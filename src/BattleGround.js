import { useState } from "react";

const BattleGround = ({ mainChar, oppChar, returnToSelect }) => {
    const newOpp = {...oppChar};
    const newMain = {...mainChar};

    const [oppAlive, setOppAlive] = useState(true);
    const [userAlive, setUserAlive] = useState(true);
    const [oppHealth, setOppHealth] = useState(newOpp.hp);
    const [userHealth, setUserHealth] = useState(newMain.hp);
    
    const attackOpponent = () => { 
        if (oppHealth > 0) {
            setOppHealth(oppHealth - newMain.attack + newOpp.defense)
        } if (oppHealth <= 0) {
            alert(`You have defeated ${newOpp.name} the ${newOpp.type}`)
            setOppAlive(!oppAlive)
        }
    }

    const attackUser = () => {
        if (userHealth > 0) {
            setUserHealth(userHealth - newOpp.attack + newMain.defense);
        } if (userHealth <= 0) {
            alert(`You have been defeated by ${newOpp.name} the ${newOpp.type}`)
            setUserAlive(!userAlive)
        }
    }



    const resetGame = () => {
        setUserAlive(!userAlive);
        setUserHealth(newMain.hp);
        setOppHealth(newOpp.hp)
    }

    const restartGame = () => {
        setUserHealth(newMain.hp);
        setOppHealth(newOpp.hp);
    }

    

    return (
        <>
            {oppAlive && userAlive ? 
                <>
                    <div className="grid grid-cols-2 gap-x-40 w-4/6">
                        <div className="flex flex-col text-center bg-white border-2 border-blue-400 h-half">
                            <img src={mainChar.avatar} alt={mainChar.name} />
                            <h2>{mainChar.name} the {mainChar.type}</h2>
                            <p>Attack: <span className="text-blue-600"><strong>{mainChar.attack}</strong></span></p>
                            <p>Defence: <span className="text-blue-600"><strong>{mainChar.defense}</strong></span></p>
                            <p>HP: <span className="text-blue-600"><strong>{userHealth}</strong></span></p>
                            <button className="p-2 m-3 bg-plum-web rounded-md text-xl font-cardo hover:text-royal-gold hover:bg-dark-purple" onClick={attackOpponent}>Attack</button>
                        </div>
                        <div className="flex flex-col text-center bg-white border-2 border-blue-400 h-half">
                            <img src={oppChar.avatar} alt={oppChar.name} />
                            <h2>{oppChar.name} the {oppChar.type}</h2>
                            <p>Attack: <span className="text-blue-600"><strong>{oppChar.attack}</strong></span></p>
                            <p>Defence: <span className="text-blue-600"><strong>{oppChar.defense}</strong></span></p>
                            <p>HP: <span className="text-blue-600"><strong>{oppHealth}</strong></span></p>
                            <button className="p-2 m-3 bg-plum-web rounded-md text-xl font-cardo hover:text-royal-gold hover:bg-dark-purple" onClick={attackUser}>Attack</button>
                        </div> 
                    </div>
                    <button className="bg-plum-web p-4 m-4 rounded-md hover:text-royal-gold hover:bg-dark-purple font-uncial text-2xl" onClick={restartGame} >Restart Battle</button>   
                </>
            : null
         }
         {userAlive && !oppAlive ? <div className="flex items-center p-10 h-quarter bg-white text-5xl font-cardo">You've won!</div> : null}
         {!userAlive && oppAlive ? <button className="bg-plum-web p-4 m-4 rounded-md hover:text-royal-gold hover:bg-dark-purple font-uncial text-2xl" onClick={resetGame}>Try again?</button> : null}
         <button className="bg-plum-web p-4 m-4 rounded-md hover:text-royal-gold hover:bg-dark-purple font-uncial text-2xl" onClick={returnToSelect} >Return to Character Select</button>
        </>
    )
}

export default BattleGround