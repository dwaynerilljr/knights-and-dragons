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
        setUserAlive(true);
        setUserHealth(newMain.hp);
        setOppHealth(newOpp.hp)
        setSpecialEligible(false)
    }

    const restartGame = () => {
        setOppAlive(true);
        setUserAlive(true);
        setUserHealth(newMain.hp);
        setOppHealth(newOpp.hp);
        setSpecialEligible(false)
    }

    

    return (
        <>
            <header className="text-center text-white text-6xl mb-4 font-uncial">Battle Arena</header>
            {oppAlive && userAlive ? 
                <>
                    <div className="grid grid-cols-3 gap-x-10 text-xl">
                        <div className="flex text-2xl flex-col items-center rounded-md bg-college-navy text-wolf-grey px-4 my-4 h-half w-full justify-self-end character">
                            <img src={mainChar.avatar} alt={mainChar.name} className="h-quarter my-2"/>
                            <h2 className="text-action-green"><strong>{mainChar.name} the {mainChar.type}</strong></h2>
                            <p>Attack: <span className="text-action-green"><strong>{mainChar.attack}</strong></span></p>
                            <p>Defence: <span className="text-action-green"><strong>{mainChar.defense}</strong></span></p>
                            <p className="text-2xl">HP: <span className="text-action-green"><strong>{userHealth}</strong></span></p>
                            {displayBtn ?
                                <button className="p-1 m-1 bg-wolf-grey text-white rounded-md text-lg font-uncial hover:text-college-navy" id="btn" onClick={attackOpponent}>Attack</button>
                                : null
                            }
                            {specialEligible ? 
                                <button className="p-1 m-1 bg-action-green text-college-navy rounded-md text-xl font-uncial hover:text-white" onClick={specialAttack}>Special Attack</button>
                                : null    
                            }
                        </div>
                        <div className="flex self-center items-center justify-self-center flex-col font-uncial w-4/6">
                            <span className="flex text-5xl text-white" >Vs.</span>
                            {/* <button className="bg-plum-web my-2 p-2 rounded-md" onClick={handleSubmit}>Choose Random Opponent</button> */}
                        </div>
                        <div className="flex flex-col text-2xl items-center rounded-md bg-college-navy text-wolf-grey w-full px-4 my-4 h-half character">
                            <img src={oppChar.avatar} alt={oppChar.name} className="h-quarter my-2" />
                            <h2 className="text-action-green"><strong>{oppChar.name} the {oppChar.type}</strong></h2>
                            <p>Attack: <span className="text-action-green"><strong>{oppChar.attack}</strong></span></p>
                            <p>Defence: <span className="text-action-green"><strong>{oppChar.defense}</strong></span></p>
                            <p className="text-2xl">HP: <span className="text-action-green"><strong>{oppHealth}</strong></span></p>
                            {attacking ?
                                <h1 className="text-red-500 text-lg text-center"><strong>{oppChar.name} is attacking!</strong></h1>
                                : null
                            }
                        </div> 
                    </div>  
                </>
            : null
         }
         {userAlive && !oppAlive ? <div className="flex items-center p-10 h-quarter bg-white text-5xl font-cardo">You've won!</div> : null}
         {!userAlive && oppAlive ? 
            <div className="flex flex-col items-center p-10 h-quarter bg-white text-5xl font-cardo">
                <p>Oh no, you lost! :(</p>
                <button className="bg-teal p-4 m-4 rounded-md hover:text-baby-blue font-uncial text-2xl" onClick={resetGame}>Try again?</button>
            </div> 
        : null}
         <div className="flex">
            <button className="bg-wolf-grey text-college-navy p-4 m-4 rounded-md hover:text-white font-uncial text-2xl" onClick={returnToSelect} >Return to Character Select</button>
            <button className="bg-action-green text-college-navy p-4 m-4 rounded-md hover:text-white font-uncial text-2xl" onClick={restartGame} >Restart Battle</button> 
         </div>
        </>
    )
}

export default BattleGround