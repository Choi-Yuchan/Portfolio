import styled, { keyframes } from "styled-components";

const Intro = () => {
    return(
        <IntroSection>
            <IntroText>
                <MainTitle>
                    I'm Yuchan Choi.
                </MainTitle>
                <IntroPara>
                    Growing Frontend Developer.
                </IntroPara>
            </IntroText>
            <MoveBtn>
                <Arrow></Arrow>
            </MoveBtn>
        </IntroSection>
    );
}

const IntroSection = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    background : no-repeat center / 75% 65% url(${process.env.PUBLIC_URL + './images/intro-background.jpg'});  
    margin-bottom: 10%;
`;

const IntroText = styled.div`
    margin-left: 13.125%;
`;

const MainTitle = styled.h1`
    font-size: 4.5rem;
    font-weight: bold;
    text-shadow: #ddd 2px 2px 0.1em;
`;
const IntroPara = styled.p`
    font-size: 2.25rem;
    text-shadow: #ddd 3px 3px 0.1em, #ddd 0 0 3px;
`;

const MoveBtn = styled.div`
    position: fixed;
    left: 50%;
    bottom: 10%;
    index: 2;
`;

const moveDown = keyframes`
    0%{
        transform: rotate(-45deg) translate(0, 0);
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    100%{
        transform: rotate(-45deg) translate(-20px, 20px);
        opacity: 0;
    }
`;

const Arrow = styled.span`
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(-45deg);
    animation: ${moveDown} 1.5s infinite;
    box-sizing: border-box;
`;
export default Intro;
