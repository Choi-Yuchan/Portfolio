import { useState } from 'react';
import styled from 'styled-components';
import ColorArea from '../colors/ColorArea';
import Concept from '../concept/Concept';
import WorkTitle from '../worktitle/WorkTitle';

const Description = () => {
    // const [workTitle,setWorkTitle] = useState([
    //     {id: 1, title : 'Indigo'},
    //     {id: 2, title : 'MEGABOX'},
    //     {id: 3, title : 'WCB cafe'},
    //     {id: 4, title : 'Hansolpaper'},
    //     {id: 5, title : `Paik's coffee`},
    //     {id: 6, title : 'Hollys coffee'},
    // ]);

    return(
        <Desc>
            <WorkTitle 
            key = '1'
            title = 'Indigo'
            info = 'Responsive webpage'/>
            <Concept 
            text = 'Young'
            text1 = 'Fresh'
            text2 = 'Urban'
            text3 = 'Simple'
            />
            <ColorArea/>
        </Desc>
    );
}

const Desc = styled.div`
    flex:5;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    transition:2s;
`;

export default Description;