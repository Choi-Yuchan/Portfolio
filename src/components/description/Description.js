import styled from 'styled-components';
import ColorArea from '../colors/ColorArea';
import Concept from '../concept/Concept';
import WorkTitle from '../worktitle/WorkTitle';

const Description = ({title, info, concept, colors}) => {

    return(
        <Desc>
            <WorkTitle 
            title = {title}
            info = {info}/>
            <Concept 
            text = {concept[0]}
            text1 = {concept[1]}
            text2 = {concept[2]}
            text3 = {concept[3]}
            />
            <ColorArea colors={colors}/>
        </Desc>
    );
}

const Desc = styled.article`
    flex:5;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    transition:2s;
`;

export default Description;