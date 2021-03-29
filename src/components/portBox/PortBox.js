import styled from 'styled-components';
import ImgBox from '../imgbox/ImgBox';
import Description from '../description/Description';

const PortBox = () => {

    return(
        <PortDiv>
            <ImgBox/>
            <Description/>
        </PortDiv>
    );
}

const PortDiv = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
`;

export default PortBox;