import React,{FC} from 'react'
import styled from 'styled-components'
import MainHeader from './Components/common/Header/MainHeader'
import SidePanel from './Components/common/sidePanel/SidePanel';

const Wrapper = styled.div`
    justify-content: center;
    align-items:center;
    display:flex;
    flex-direction: column;
`;
const Content = styled.div`
    max-width:1200px;
    align-items: center;
    display:flex;
`;

const App : FC = () => {
  return (
    <Wrapper>
        <MainHeader/>
        <Content>
          <SidePanel/>
          <div>Work in progress</div>
        </Content>
    </Wrapper>
  );
}

export default App;
