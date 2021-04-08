import React, { FC } from "react";
import styled from "styled-components";
import MenuOption from "./MenuOption";
import Logout from "./Logout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


const Menu = styled.div`
    display:inline-flex;
    position:absolute;
    flex-direction:column;
    background-color:white;
`;

const Category=styled.span`
  color:grey;
  font-size:10px;
`;

function Home() {
  return <h2>Home</h2>;
}

function Publications() {
  return <h2>Publications</h2>;
}

function People() {
  return <h2>People</h2>;
}

function Entities() {
  return <h2>Entities</h2>;
}

function Administration() {
  return <h2>Administration  </h2>;
}

const ExpandedMenu: FC = () => {
    return (
      <Menu>
          <Router>
            <input placeholder="Filter..."></input>
            <Category>Platform</Category>
            <Link to='/'>
            <MenuOption
              source="../../../icons/house2.png"
              alt="houseIcon"
              text="Home"
            />
            </Link>
            <Link to='/publications'>
            <MenuOption
              source="../../../icons/publications.png"
              alt="publicationsIcon"
              text="Publications"
            />
            </Link>
            <Link to='/people'>
            <MenuOption
              source="../../../icons/people.png"
              alt="PeopleIcon"
              text="People"
            />
            </Link>
            <Link to='/entities'>
            <MenuOption
              source="../../../icons/entities2.png"
              alt="EntitiesIcon"
              text="Entities"
            />
            </Link>
            <Link to='/administration'>
            <MenuOption
              source="../../../icons/administration.png"
              alt="administrationIcon"
              text="Administration"
            />
            </Link>
            <Category>Workspace</Category>
            <Link to='/'>
            <MenuOption
              source="../../../icons/administration.png"
              alt="administrationIcon"
              text="Client Contact"
            />
            </Link>
            <Link to='/'>
            <MenuOption
              source="../../../icons/administration.png"
              alt="administrationIcon"
              text="Supplier Contact"
            />
            </Link>
            <Link to='/'>
            <MenuOption
              source="../../../icons/entities.png"
              alt="administrationIcon"
              text="Corporate"
            />
            </Link>
            <Link to='/'>
            <MenuOption
              source="../../../icons/administration.png"
              alt="administrationIcon"
              text="Group Name"
            />
            </Link>
            <Link to='/'>
            <MenuOption
              source="../../../icons/administration.png"
              alt="administrationIcon"
              text="Real estate Contact"
            />
            </Link>
            <Category>Account</Category>
            <Link to='/'>
            <MenuOption
              source="../../../icons/privacy.png"
              alt="privacyIcon"
              text="Privacy"
            />
            </Link>
            <Link to='/'>
            <MenuOption
              source="../../../icons/settings.png"
              alt="settingsIcon"
              text="Settings"
            />
            </Link>
            <Logout/>
          <Switch>
            <Route path="/publications">
              <Publications />
            </Route>
            <Route path="/people">
              <People />
            </Route>
            <Route path="/entities">
              <Entities />
            </Route>
            <Route path="/administration">
              <Administration />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Menu>
    );
  };
  export default ExpandedMenu;