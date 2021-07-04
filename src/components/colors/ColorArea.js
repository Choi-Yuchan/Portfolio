import styled from 'styled-components';
import ColorBl from '../colorBl/ColorBl';

const ColorArea = ({colors}) => {
    return(
        <Colors>
            <ConText>Colors</ConText>
            <ColorBox>
                <ColorBl color={colors[0]}></ColorBl>
                <ColorBl color={colors[1]}></ColorBl>
                <ColorBl color={colors[2]}></ColorBl>
                <ColorBl color={colors[3]}></ColorBl>
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