




const TitleScreen = ({renderSelect}) => {
    return (
        <>
            <header className="text-center text-white text-6xl font-uncial">Welcome to Knights & Dragons!</header>
            <div className="flex font-cardo text-xl justify-center my-10 w-4/6">
                <p className="w-4/6 bg-white p-4 text-center">
                    Come along and choose your warrior, then battle evil (or good, depending on the character you choose) opponents and save the 
                    world (or destroy it, I won't judge). Knights and Dragons is a fun, turn-based card style battling React game, so come see if you have what it takes
                    to become the ultimate warrior!
                </p>
            </div>
            <div className="flex justify-center">
                <button onClick={renderSelect} type="submit" className="text-2xl flex justify-center bg-wolf-grey hover:text-college-navy p-4 font-uncial text-white rounded-md">Start Your Journey</button>
            </div>
        </>
    )
}

export default TitleScreen