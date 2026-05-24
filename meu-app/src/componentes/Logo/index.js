import logo from '../../imagens/logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;  `

const LogoImage = styled.img`
    margin-right: 10px;
     width: 100px;
     height: 100px;
    `

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
             src={logo}
              alt='logo'
              className='logo-img'
              />  
            <p><strong>Book</strong>flow</p>
        </LogoContainer>
    );
}

export default Logo;