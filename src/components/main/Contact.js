import { useState } from 'react';
import styled from 'styled-components';

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const handleChangeName = (e) => {
        if(e.target.placeholder === "Name"){
            setName(e.target.value);
        }
    }

    const handleChangeEmail = (e) => {
        if(e.target.placeholder === "E-mail"){
            setEmail(e.target.value);
        }
    }

    const handleChangeSubject = (e) => {
        if(e.target.placeholder === "Subject"){
            setSubject(e.target.value);
        }
    }

    const handleChangeMessage = (e) => {
        if(e.target.placeholder === "Message"){
            setMessage(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const checkBlanks = () => {
            if(name === "" || email === "" || subject === "" || message === ""){
                alert("Please fill in all blanks");
            }
        }
        
        if(name && email && subject && message){
            alert(`Thank you ${name} for sending me a message. I will reply you soon`)
            setName("")
            setEmail("")
            setSubject("")
            setMessage("")
        }
        checkBlanks();
    }


    
    

    return(
        <Section>
            <TitleBox>
                <Title>Contact</Title>
                <UnderLine/>
            </TitleBox>
            <ContactInfo>
                <InfoUnlist>
                    <InfoList>
                        <MainText>Phone</MainText>
                        <SubText>+82 010-7162-9282</SubText>
                    </InfoList>
                </InfoUnlist>
                <InfoUnlist>
                    <InfoList>
                        <MainText>Place</MainText>
                        <SubText>Seoul, Korea</SubText>
                    </InfoList>
                </InfoUnlist>
                <InfoUnlist>
                    <InfoList>
                        <MainText>E-mail</MainText>
                        <SubText>cor330@gmail.com</SubText>
                    </InfoList>
                </InfoUnlist>
            </ContactInfo>
            <Message>
                <MyForm onSubmit={handleSubmit}>
                    <Sentence>Let's get in touch. Send me a message</Sentence>
                    <Input placeholder="Name" value={name} onChange={handleChangeName}/>
                    <Input placeholder="E-mail" value={email} onChange={handleChangeEmail}/>
                    <Input placeholder="Subject" value={subject} onChange={handleChangeSubject}/>
                    <Input placeholder="Message" value={message} onChange={handleChangeMessage}/>
                    <SendBtn type="submit">Send</SendBtn>
                </MyForm>
            </Message>
        </Section>
    );
}

const Section = styled.section`
    padding-bottom: 5%;
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

const ContactInfo = styled.div`
    margin:30px 0;
`;

const InfoUnlist = styled.ul`
    list-style-type: none;
`;

const InfoList = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 1.125rem;
`;
const MainText = styled.h4`
    color:white;
    margin-right:2rem;
`;
const SubText = styled.p`
    font-size: 0.8rem;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.6);
`;
const Message = styled.div`
    width: 33%;
    margin-top: 5%;
`;
const MyForm = styled.form`
`;
const Sentence = styled.p`
`;
const Input = styled.input`
    width:100%;
    text-align: start;
    margin: 25px 0;
    padding: 1rem;
    border: inset 2px #f1f1f1;
`;
const SendBtn = styled.button`
    cursor: pointer;
    margin-top: 25px;
    padding: 10px 30px;
    font-size: 1.125rem;
    border: #929292 outset 3px;
    transition: 0.5s

    :focus, :hover{
        box-shadow: inset 7em 0 0 0 #111;
        color: #f1f1f1;
        border-style: inset;
    }
`;
export default Contact;