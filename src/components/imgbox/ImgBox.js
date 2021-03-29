import styled from 'styled-components';

const ImgBox = () => {
    return(
        <ImgDiv>
            <Image src={process.env.PUBLIC_URL + './images/indigo-mockup.jpg'} alt='Portfolio'></Image>
            <ButtonBox>
                <Button as='a' href='https://choi-yuchan.github.io/Indigo/'>WEBSITE</Button>
            </ButtonBox>
        </ImgDiv>
    );
}

const ImgDiv = styled.div`
    position: relative;
    flex: 5;
    display: flex;
    flex-flow: column wrap;
`;

const Image = styled.img`
    width: 100%;
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 40%;
    left: 50%;
    transform: translateX(-50%);
`;

const Button = styled.button`
    width: 126px;
    height: 54px;
    background: black;
    box-shadow: 0.1em 0.1em 0.1em #bcbcbc, -0.1em -0.1em 0.1em #fefefe;
    color: white;
    transition: 0.3s;
    text-align: center;
    font-size: 1.125rem;
    line-height:3.2rem;
    margin: 0 50px;
    text-decoration:none;

    :hover, :focus{
        color: #fffec4;
        border: #fffec4 1px solid;
        box-shadow: 0 0.5em 0.5em -0.4em #fffec4;
        transform: translateY(-0.25em);
    }
`;

export default ImgBox;