import Home from '../MainPart/Home/Home'
import Portfolio from '../MainPart/Portfolio/Portfolio'
// import About from '../MainPart/About/About'
import Infos from '../MainPart/Infos/Infos'

const NavBar = ({ setTopText, setMainPart }) => {

    return (
        <nav className="NavBar container">
            <ul>
                <li >
                    <button
                        onClick={() => setMainPart(<Home />)}
                    >Home</button>
                </li>
                <li>
                    <button onClick={() => setMainPart(<Portfolio />)}>Portfolio</button>
                </li>
                <li>
                    <button onClick={() => setMainPart(<Infos />)}>Infos</button>
                </li>
            </ul>
        </nav >
    )
}

export default NavBar