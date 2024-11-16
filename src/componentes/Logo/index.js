import './estilo.css'
import logo from '../../imagens/logo.png'

function Logo(){
    return(
        <div className='logo'>
            <img src={logo} alt="logo" className='logo-img'></img>
            <p>Portal de Periódicos do <strong>CAPES</strong></p>
        </div>
    )
}

export default Logo