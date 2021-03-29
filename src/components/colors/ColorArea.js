import styled from 'styled-components';
import ColorBl from '../colorBl/ColorBl';

const ColorArea = () => {
    return(
        <Colors>
            <ConText>Colors</ConText>
            <ColorBox>
                <ColorBl color="#eee"></ColorBl>
                <ColorBl color="#3f51b5"></ColorBl>
                <ColorBl color="#303f9f"></ColorBl>
                <ColorBl color="#fff"></ColorBl>
            </ColorBox>
        </Colors>
    );
}

const Colors = styled.div`
    flex: 4;
`;
const ConText = styled.h3`
    font-size:2.5rem;
    font-weight:bold;
    margin-bottom:0.5rem;
    line-height: 1.25;
    margin-bottom : 1rem;
    font-size:1.875rem;
`;

const ColorBox = styled.div`
    display:flex;
    text-align:center;
`;

export default ColorArea;