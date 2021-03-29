import React from 'react';
import styled from 'styled-components';
import About from './components/main/About';
import Contact from './components/main/Contact';
import Intro from './components/main/Intro';
import MyWork from './components/mywork/MyWork';
import SkipMenu from './components/SkipMenu';

function App() {
  return (
    <Wrapper>
      <SkipMenu/>
      <Intro/>
      <About/>
      <MyWork/>
      <MyWork/>
      <MyWork/>
      <MyWork/>
      <MyWork/>
      <Contact/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin:0 auto;
  padding-left: 5%;
  background-color:black;
  color: white;
`;
export default App;
