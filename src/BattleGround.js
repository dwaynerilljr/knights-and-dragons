import { useState, useEffect } from "react";

const BattleGround = ({ mainChar, oppChar, returnToSelect }) => {
    const newOpp = {...oppChar};
    const newMain = {...mainChar};

    const [oppAlive, setOppAlive] = useState(true);
    const [userAlive, setUserAlive] = useState(true);
    const [oppHealth, setOppHealth] = useState(newOpp.hp);
    const [userHealth, setUserHealth] = useState(newMain.hp);
    const [specialEligible, setSpecialEligible] = useState(false);
    const [displayBtn, setDisplayBtn] = useState(true);
    const [attacking, setAttacking] = useState(false);
    
    const attackOpponent = () => {
        if (oppHealth > 0) {
            setOppHealth(oppHealth - newMain.attack + newOpp.defense)
        }
        setDisplayBtn(false);
        setAttacking(true);
        setTimeout(() => {
            attackUser();
            setDisplayBtn(true);
            setAttacking(false);
        }, 2000);
    }

    useEffect(() => {
        if (oppHealth <= 0) {
            setOppHealth(0);
            setOppAlive(false);
        }
        if (userHealth <= 0) {
            setUserHealth(0);
            setUserAlive(false);
        }
        if (userHealth <= 60) {
            setSpecialEligible(true)
        }
    }, [oppHealth, userHealth])

    const specialAttack = () => {
        const specialMove = newMain.attack * 1.25;
        setOppHealth(oppHealth - specialMove)
        setAttacking(true);
        setTimeout(() => {
            attackUser();
            setDisplayBtn(true);
            setAttacking(false);
        }, 2000);
    }

    const attackUser = () => {
        if (userHealth > 0) {
            setUserHealth(userHealth - newOpp.attack + newMain.defense);
        } if (userHealth < 0) {
            alert(`You have been defeated by ${newOpp.name} the ${newOpp.type}`)
            setUserAlive(!userAlive)
        }
    }



    const resetGame = () => {
        setUserAlive(!userAlive);
        setUserHealth(newMain.hp);
        setOppHealth(newOpp.hp)
        setSpecialEligible(false)
    }

    const restartGame = () => {
        setUserHealth(newMain.hp);
        setOppHealth(newOpp.hp);
        setSpecialEligible(false)
    }

    

    return (
        <>
            <header className="text-center text-white text-6xl mb-4 font-uncial">Battle Arena</header>
            {oppAlive && userAlive ? 
                <>
                    <div className="grid grid-cols-2 gap-x-40 w-4/6">
                        <div className="flex flex-col items-center bg-white border-2 border-blue-400 my-4 h-half w-1/2 justify-self-end">
                            <img src={mainChar.avatar} alt={mainChar.name} className="h-quarter my-2"/>
                            <h2>{mainChar.name} the {mainChar.type}</h2>
                            <p>Attack: <span className="text-blue-600"><strong>{mainChar.attack}</strong></span></p>
                            <p>Defence: <span className="text-blue-600"><strong>{mainChar.defense}</strong></span></p>
                            <p className="text-2xl">HP: <span className="text-blue-600"><strong>{userHealth}</strong></span></p>
                            {displayBtn ?
                                <button className="p-2 m-1 bg-plum-web rounded-md text-xl font-cardo hover:text-royal-gold hover:bg-dark-purple" id="btn" onClick={attackOpponent}>Attack</button>
                                : null
                            }
                            {specialEligible ? 
                                <button className="p-2 m-1 bg-royal-gold rounded-md text-xl font-cardo hover:text-royal-gold hover:bg-dark-purple" onClick={specialAttack}>Special Attack</button>
                                : null    
                            }
                        </div>
                        <div className="flex flex-col items-center bg-white border-2 border-blue-400 my-4 h-half w-1/2">
                            <img src={oppChar.avatar} alt={oppChar.name} className="h-quarter my-2" />
                            <h2>{oppChar.name} the {oppChar.type}</h2>
                            <p>Attack: <span className="text-blue-600"><strong>{oppChar.attack}</strong></span></p>
                            <p>Defence: <span className="text-blue-600"><strong>{oppChar.defense}</strong></span></p>
                            <p className="text-2xl">HP: <span className="text-blue-600"><strong>{oppHealth}</strong></span></p>
                            {attacking ?
                                <h1 className="text-red-500 text-lg text-center"><strong>{oppChar.name} the {oppChar.type} is attacking!</strong></h1>
                                : null
                            }
                        </div> 
                    </div>
                    <button className="bg-plum-web p-4 m-4 rounded-md hover:text-royal-gold hover:bg-dark-purple font-uncial text-2xl" onClick={restartGame} >Restart Battle</button>   
                </>
            : null
         }
         {userAlive && !oppAlive ? <div className="flex items-center p-10 h-quarter bg-white text-5xl font-cardo">You've won!</div> : null}
         {!userAlive && oppAlive ? 
            <div className="flex flex-col items-center p-10 h-quarter bg-white text-5xl font-cardo">
                <p>Oh no, you lost! :(</p>
                <button className="bg-plum-web p-4 m-4 rounded-md hover:text-royal-gold hover:bg-dark-purple font-uncial text-2xl" onClick={resetGame}>Try again?</button>
            </div> 
        : null}
         <button className="bg-plum-web p-4 m-4 rounded-md hover:text-royal-gold hover:bg-dark-purple font-uncial text-2xl" onClick={returnToSelect} >Return to Character Select</button>
        </>
    )
}

export default BattleGround