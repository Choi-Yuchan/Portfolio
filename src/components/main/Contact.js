import styled from 'styled-components';

const Contact = () => {
    return(
        <Section>
            <TitleBox>
                <Title>Contact</Title>
                <UnderLine/>
            </TitleBox>
        </Section>
    );
}

const Section = styled.section`
    height: 100vmin;
    margin-bottom: 5%;
`;

const TitleBox = styled.div`
`;

const Title = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    text-shadow: #ddd 2px 2px 0.1em;
`;

const UnderLine = styled.div`
    height: 3px;
    width: 230px;
    background-color: #ddd;
    box-shadow: #ddd 2px 2px 3px, #ddd 0 0 3px;
    margin: 1rem 0;
`;
export default Contact;