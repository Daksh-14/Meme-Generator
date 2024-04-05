import logo from "../images/troll-face.png"
import "../style/Header.css"
export default function Header(){
    return(
        <nav className="Navbar">
            <div className="NavWrap">
                <img src={logo} className="Navbar-img"/>
                <h1 className="Navbar-heading"> Meme Generator</h1>
            </div>
            <p className="Navbar-text">React Course-Project3</p> 
        </nav>
        
    )
}