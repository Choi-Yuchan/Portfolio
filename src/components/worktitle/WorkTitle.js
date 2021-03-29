import styled from 'styled-components';

function WorkTitle(props){
    return(
        <WorkTit key={props.key}>
            <MainText>
                {props.title}
            </MainText>
            <SubText>
                {props.info}
            </SubText>
        </WorkTit>
    );
}

const WorkTit = styled.div`
    flex:1;
`;
const MainText = styled.h3`
    font-size:2.5rem;
    font-weight:bold;
    margin-bottom:0.5rem;
    line-height: 1.25;
`;
const SubText = styled.p`
    font-size: 1.5rem;
    color: #bcbcbc;
    padding-bottom: 1rem;
`;

export default WorkTitle;