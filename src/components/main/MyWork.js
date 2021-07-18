import styled from 'styled-components';
import PortBox from '../portBox/PortBox'

const MyWork = () => {
    const portData = [
        {
            id : 1,
            title: "Indigo",
            info: "Responsive website",
            concept: ["Young","Fresh","Urban","Simple"],
            src: process.env.PUBLIC_URL + './images/indigo-mockup.jpg',
            href:"https://choi-yuchan.github.io/Indigo/",
            colors: ["#eee","#3f51b5","#303f9f","#fff"]
        },
        {
            id : 2,
            title: "MEGABOX",
            info: "Adaptive website",
            concept: ["Casual","Impact","Classy","Readable"],
            src: process.env.PUBLIC_URL + './images/mega-mockup.jpg',
            href:"https://choi-yuchan.github.io/Indigo/",
            colors: ["#503396","#037b94","#666","#fff"]
        },
        {
            id : 3,
            title: "WCB cafe",
            info: "Responsive website",
            concept: ["Nature","Clear","Fresh","Simple"],
            src: process.env.PUBLIC_URL + './images/wcbcafe-mockup.jpg',
            href:"https://choi-yuchan.github.io/Indigo/",
            colors: ["#00bbdd","#443322","#ddd","#fff"]
        },
        {
            id : 4,
            title: "Hansolpaper",
            info: "Responsive website",
            concept: ["Comfortable","Readable","Clear","Bright"],
            src: process.env.PUBLIC_URL + './images/hansol-mockup.jpg',
            href:"https://choi-yuchan.github.io/Indigo/",
            colors: ["#fff","#17a589","#333","#666"]
        },
        {
            id : 5,
            title: "Baik's coffee",
            info: "Responsive website",
            concept: ["Active","Colorful","Cool","Summer"],
            src: process.env.PUBLIC_URL + './images/baiks-mockup.jpg',
            href:"https://choi-yuchan.github.io/Indigo/",
            colors: ["#ffe600","#0e347e","#202020","#fff"]
        },
        {
            id : 6,
            title: "Hollys coffee",
            info: "Responsive website",
            concept: ["Classy","Summer","Accesible","Cool"],
            src: process.env.PUBLIC_URL + './images/hollys-mockup.jpg',
            href:"https://choi-yuchan.github.io/Indigo/",
            colors: ["#ba000c","#333333","#666666","#fff"]
        },
    ]    
    return(
        <Section>
            <TitleBox>
                <Title>My Work</Title>
                <UnderLine/>
            </TitleBox>
            {portData.map(data =>         
            <PortBox key={data.id} title={data.title} info={data.info}
            concept={data.concept} src={data.src} href={data.href} colors={data.colors}
            />                    
            )}
        </Section>
    );
}


const Section = styled.section`
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

export default MyWork;