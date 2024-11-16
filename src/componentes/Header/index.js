import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader'
import styled from 'styled-components';
const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
        </HeaderContainer>
    )
}

export default Header;