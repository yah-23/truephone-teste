import { HeaderContainer, LogoContainer, LogoSpan, LogoTitle } from './styles';
import { PhoneOutlined } from '@ant-design/icons';


const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <LogoSpan><PhoneOutlined /></LogoSpan> <LogoTitle>Truephone</LogoTitle>
            </LogoContainer>
        </HeaderContainer>
    )
}

export default Header;