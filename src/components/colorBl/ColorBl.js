import React from 'react';
import styled from 'styled-components';

function ColorBl(props) {
  return (
    <ColorBox>
        <Color color={props.color}></Color>
        <ColorCode>{props.color}</ColorCode>
    </ColorBox>
  );
}

const ColorBox = styled.div`
`;

const Color = styled.div`
    background-color: ${props => props.color};
    width: 105px;
    height: 60px;
    margin-right: 20px;
`;

const ColorCode = styled.div`
    margin-top: 0.8rem;
    margin-right: 20px;
`;

export default ColorBl;
