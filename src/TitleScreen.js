




const TitleScreen = ({renderSelect}) => {
    return (
        <>
            <header className="text-center text-white text-6xl font-uncial">Welcome to Knights & Dragons!</header>
            <div className="flex font-cardo text-xl justify-center my-10 w-4/6">
                <p className="w-4/6 bg-white p-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas commodi beatae veritatis natus maiores eligendi. 
                Doloremque provident quae nostrum, iste rerum excepturi sunt recusandae placeat ex! Deleniti voluptatum nihil assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum soluta molestias provident illo quibusdam minima, non culpa minus quaerat, 
                modi unde tempore ex debitis pariatur consectetur, saepe amet voluptas tenetur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi totam dolores accusantium nobis fugit ad neque itaque molestiae aut alias autem perspiciatis dolore, vel rerum ob
                caecati laboriosam perferendis, ut vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur esse hic modi perspiciatis illum, inventore a eveniet alias eligendi. Voluptate quibusdam adipisci facere, obcaecati veritatis at doloremque dolore 
                consequuntur et!</p>
            </div>
            <div className="flex justify-center">
                <button onClick={renderSelect} type="submit" className="text-2xl flex justify-center bg-plum-web hover:text-royal-gold hover:bg-dark-purple p-2 font-uncial text-dark-purple rounded-md">Start Your Journey</button>
            </div>
        </>
    )
}

export default TitleScreen