
import memeface from '../assets/images/troll-face.png'
import "../assets/css /style.css"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={memeface} 
                className="header--image"
                alt='memeface'
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}
