import React, { FC, useEffect } from "react";
import styled from 'styled-components'
import MainHeader from './Components/common/Header/MainHeader'
import SidePanel from './Components/common/sidePanel/SidePanel';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPanel from './Components/common/MainPanel/MainPanel'
import Entities from "./Components/mainContent/entitiesPage/Entities";
import Workspaces from "./Components/mainContent/workspacePage/Workspaces";
import Profile from "./Components/mainContent/profilesPage/Profile";
import Administration from './Components/mainContent/administrationPage/administration';
import ClientContact from './Components/mainContent/clientContactPage/clientContact';
import Corporate from './Components/mainContent/corporatePage/corporate';
import Ecosystem from './Components/mainContent/ecosystemPage/ecosystem';
import Group from './Components/mainContent/groupPage/group';
import People from './Components/mainContent/peoplePage/people';
import Privacy from './Components/mainContent/privacyPage/privacy';
import Publications from './Components/mainContent/publicationsPage/publication';
import RealEstateContact from './Components/mainContent/realEstateContactPage/realEstateContact';
import Settings from './Components/mainContent/settingsPage/settings'
import SupplierContact from './Components/mainContent/supplierContactPage/supplierContact';
import {useDispatch} from 'react-redux';
import {getUsers} from './actions/usersActions';
import {getPhotos} from './actions/photosActions';
import {getComments} from './actions/commentsActions';
import {getPosts} from './actions/postsActions';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;
type GetComments = ReturnType<typeof getComments>;
type GetPosts = ReturnType<typeof getPosts>;


const Wrapper = styled.div`
    justify-content: center;
    align-items:center;
    display:flex;
    flex-direction: column;
`;
const Content = styled.div`
    width:1700px;
    display:flex;
`;

const App : FC = () => {
  const dispatch = useDispatch();
    useEffect(()=>{
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
        dispatch<GetComments>(getComments());
        dispatch<GetPosts>(getPosts());
    });
  return (
      <Router>
        <Wrapper>
          <MainHeader/>
          <Content>
            <SidePanel/>
              <Switch>
                <Route path="/entities">
                  <Entities />
                </Route>
                <Route path="/workspace">  
                  <Workspaces />
                </Route>
                <Route path="/profile">  
                  <Profile />
                </Route>
                <Route path="/administration">  
                  <Administration />
                </Route>
                <Route path="/publications">  
                  <Publications />
                </Route>
                <Route path="/people">  
                  <People />
                </Route>
                <Route path="/client_contact">  
                  <ClientContact />
                </Route>
                <Route path="/supplier_contact">  
                  <SupplierContact />
                </Route>
                <Route path="/corporate">  
                  <Corporate />
                </Route>
                <Route path="/group">  
                  <Group />
                </Route>
                <Route path="/real_estate_contact">  
                  <RealEstateContact />
                </Route>
                <Route path="/privacy">  
                  <Privacy />
                </Route>
                <Route path="/settings">  
                  <Settings />
                </Route>
                <Route path="/ecosystem">  
                  <Ecosystem />
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
