import './estilo.css'
import lampada from '../../imagens/lampada.png'
import livro from '../../imagens/livro.png'
import treino from '../../imagens/treino.png'
import caderno from '../../imagens/caderno.png'
import ajuda from '../../imagens/ajuda.png'
import perfil from '../../imagens/perfil.png'

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            <li className='opcao'><p>Sobre</p></li>
            <li className='icone'><img src={lampada} className='icone-img'></img></li>
            <li className='opcao'><p>Acervo</p></li>
            <li className='icone'><img src={livro} className='icone-img'></img></li>
            <li className='opcao'><p>Treinamentos</p></li>
            <li className='icone'><img src={treino} className='icone-img'></img></li>
            <li className='opcao'><p>Informativos</p></li>
            <li className='icone'><img src={caderno} className='icone-img'></img></li>
            <li className='opcao'><p>Ajuda</p></li>
            <li className='icone'><img src={ajuda} className='icone-img'></img></li>
            <li className='opcao'><p><strong>MEU ESPAÇO</strong></p></li>
            <li className='icone'><img src={perfil} className='icone-img'></img></li>
        </ul>    
    )
}

export default OpcoesHeader