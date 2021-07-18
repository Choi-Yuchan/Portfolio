import styled from 'styled-components';
import ImgBox from '../imgbox/ImgBox';
import Description from '../description/Description';

const PortBox = ({title, info, concept, src, href, colors}) => {

    return(
        <PortDiv>
            <ImgBox src={src} href={href}/>
            <Description title={title} info={info} concept={concept} colors={colors}/>
        </PortDiv>
    );
}

const PortDiv = styled.div`
    display: flex;
    justify-content: center;
    padding:15% 5%;
    border-bottom:1px solid rgba(255, 255, 255, 0.3);
    &:first-child {
        padding-top: 5%;
    }
`;

export default PortBox;