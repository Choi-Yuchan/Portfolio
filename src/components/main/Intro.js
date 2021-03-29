import styled from "styled-components";

const Intro = () => {
    return(
        <IntroSection>
            <IntroText>
                <MainTitle>
                    I'm Yuchan Choi.
                </MainTitle>
                <IntroPara>
                    Growing Web Publisher.
                </IntroPara>
            </IntroText>
        </IntroSection>
    );
}

// const Section = styled.section`
//     height: 100vmin;
//     margin-bottom: 5%;
// `;

const IntroSection = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    background : no-repeat center / 75% 65% url(${process.env.PUBLIC_URL + './images/intro-background.jpg'})  
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
export default Intro;
