import styled from 'styled-components';


const Concept = (props) => {

    return(
        <WorkTxt>
            <ConText>Concept</ConText>
            <SubText>{props.text}</SubText>
            <SubText>{props.text1}</SubText>
            <SubText>{props.text2}</SubText>
            <SubText>{props.text3}</SubText>
        </WorkTxt>
    );
}

const SubText = styled.p`
    font-size: 1.5rem;
    color: #bcbcbc;
    padding-bottom: 1rem;
`;

const WorkTxt = styled.div`
    flex:2;
`;

const ConText = styled.h3`
    font-size:2.5rem;
    font-weight:bold;
    margin-bottom:0.5rem;
    line-height: 1.25;
    margin-bottom : 1rem;
    font-size:1.875rem;
`;

export default Concept;