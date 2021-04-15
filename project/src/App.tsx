import React,{FC} from 'react'
import styled from 'styled-components'
import MainHeader from './Components/common/Header/MainHeader'
import SidePanel from './Components/common/sidePanel/SidePanel';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPanel from './Components/common/MainPanel/MainPanel'
import Entities from "./Components/mainContent/entitiesPage/Entities";
import Workspaces from "./Components/mainContent/workspacePage/Workspaces";
import Profile from "./Components/mainContent/profilesPage/Profile";

const Wrapper = styled.div`
    justify-content: center;
    align-items:center;
    display:flex;
    flex-direction: column;
`;
const Content = styled.div`
    width:1700px;
    align-items: center;
    display:flex;
`;

const App : FC = () => {
  return (
    <Router>
    <Wrapper>
        <MainHeader/>
        <Content>
          <SidePanel/>
            <Switch>
              <Route path="/profile">
                <Profile />
                  </Route>
                <Route path="/workspaces">
                  <Workspaces />
                </Route>
                <Route path="/entities">
                  <Entities />
                </Route>
                <Route path="/">
                  <MainPanel />
                </Route>
            </Switch>
        </Content>
    </Wrapper>
    </Router>
  );
}

export default App;
