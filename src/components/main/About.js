import styled from "styled-components";

const About = () => {
    return(
        <Section>
            <TitleBox>
                <Title>About me</Title>
                <UnderLine/>
            </TitleBox>
            <Contents>
                <MyIntro>
                    <MainText> 
                        저는 다양한 경험을 바탕으로 유저의 니즈를 파악하고 이해하는데 능하며,
                        도전을 두려워하지 않고 배우고자 하는 의지가 강하여 항상 성장해 나가는 
                        웹 퍼블리셔입니다.
                    </MainText>
                </MyIntro>
                <Edu>
                    <EduContent>
                        <SubTitle>Education</SubTitle>
                        <SubText>국제 컴퓨터 아카데미<br/>스마트기기 UI/UX 웹퍼블리셔 과정</SubText>
                        <SubText>Greystone College<br/>Customer service course</SubText>
                        <SubText>세종대학교<br/>외식경영학과 전공</SubText>
                    </EduContent>
                    <Certificate>
                        <SubTitle>Certificates</SubTitle>
                        <SubText>ICDL advanced certificates</SubText>
                        <SubText>상공회의소 IT Plus Level 2</SubText>
                        <SubText>반려동물관리사</SubText>
                        <SubText>워드프로세서 2급</SubText>
                        <SubText>컴퓨터활용능력 2급</SubText>
                        <SubText>바둑 아마 初단</SubText>
                    </Certificate>
                </Edu>
                <MySkill>
                    <MyTitle>My Skills</MyTitle>
                    <SkillBar>
                        <StatusBar>
                            <SkillText>HTML</SkillText>
                            <Bar>
                                <Status lev = {95}></Status>
                            </Bar>
                        </StatusBar>
                        <StatusBar>
                            <SkillText>CSS</SkillText>
                            <Bar>
                                <Status lev = {95}></Status>
                            </Bar>
                        </StatusBar>
                        <StatusBar>
                            <SkillText>JavaScript</SkillText>
                            <Bar>
                                <Status lev = {85}></Status>
                            </Bar>
                        </StatusBar>
                        <StatusBar>
                            <SkillText>JQuery</SkillText>
                            <Bar>
                                <Status lev = {70}></Status>
                            </Bar>
                        </StatusBar>
                        <StatusBar>
                            <SkillText>React</SkillText>
                            <Bar>
                                <Status lev = {80}></Status>
                            </Bar>
                        </StatusBar>
                        <StatusBar>
                            <SkillText>Photoshop</SkillText>
                            <Bar>
                                <Status lev = {85}></Status>
                            </Bar>
                        </StatusBar>
                        <StatusBar>
                            <SkillText>Illustrator</SkillText>
                            <Bar>
                                <Status lev = {85}></Status>
                            </Bar>
                        </StatusBar>
                        <StatusBar>
                            <SkillText>OA</SkillText>
                            <Bar>
                                <Status lev = {90}></Status>
                            </Bar>
                        </StatusBar>
                    </SkillBar>
                </MySkill>
            </Contents>
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

const Contents = styled.div`
    display: flex;
    flex-flow: column wrap;
    height:100%;
`;

const MyIntro = styled.article`
    width: 26.25%;
    padding-bottom: 8%;
`;

const MainText = styled.p`
    font-size: 1.125rem;
    color: #fefefe;
    padding-top: 8%;
    line-height: 2;
`;

const Edu = styled.article`
    display: flex;
    height: 40vh;
`;

const EduContent = styled.div`
    width:45%;
`;

const Certificate = styled.div`
    width:45%;
`;

const SubTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
`;

const SubText = styled.p`
    margin: 1rem 0;
    line-height: 2;
    font-size: 0.8rem;
    color: #bdbdbd;
`;

const MySkill = styled.article`
    width: 30%;
    margin-right: 10%;
    padding-top: 2%;
`;
const MyTitle = styled(SubTitle)`
    margin-bottom: 1.2rem;
`;
const SkillBar = styled.div`
    display: flex;
    flex-direction: column;
`;

const StatusBar = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
`;

const SkillText = styled(SubText)`
    flex: 0.5;
    text-align: right;
    padding-right: 1rem;
    margin: 0;
`;

const Bar = styled.div`
    flex: 3;
    height: 1.125rem;
    background-color:white;
    margin: 4.5px 0;
`;

const Status = styled.div`
    background-color: #929292;
    width: ${props => props.lev}%;
    height: 1.125rem;
    z-index: 2;
`;
export default About;