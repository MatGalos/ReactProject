import React, { FC } from "react";
import styled from "styled-components";
import MenuOption from "./MenuOption";
import Logout from "./Logout";

const Menu = styled.div`
    display:inline-flex;
    flex-direction:column;
    background-color:white;
`;

const Category=styled.span`
  color:grey;
  font-size:10px;
`;

const ExpandedMenu: FC = () => {
    return (
      <Menu>
          <input placeholder="Filter..."></input>
          <Category>Platform</Category>
          <MenuOption
            source="../../../icons/house2.png"
            alt="houseIcon"
            text="Home"
          />
          <MenuOption
            source="../../../icons/publications.png"
            alt="publicationsIcon"
            text="Publications"
          />
          <MenuOption
            source="../../../icons/people.png"
            alt="PeopleIcon"
            text="People"
          />
          <MenuOption
            source="../../../icons/entities2.png"
            alt="EntitiesIcon"
            text="Entities"
            />
            <MenuOption
            source="../../../icons/administration.png"
            alt="administrationIcon"
            text="Administration"
            />
          <Category>Workspace</Category>
          <MenuOption
            source="../../../icons/administration.png"
            alt="administrationIcon"
            text="Client Contact"
            />
             <MenuOption
            source="../../../icons/administration.png"
            alt="administrationIcon"
            text="Supplier Contact"
            />
             <MenuOption
            source="../../../icons/entities.png"
            alt="administrationIcon"
            text="Corporate"
            />
             <MenuOption
            source="../../../icons/administration.png"
            alt="administrationIcon"
            text="Group Name"
            />
             <MenuOption
            source="../../../icons/administration.png"
            alt="administrationIcon"
            text="Real estate Contact"
            />
          <Category>Account</Category>
          <MenuOption
            source="../../../icons/privacy.png"
            alt="privacyIcon"
            text="Privacy"
            />
            <MenuOption
            source="../../../icons/settings.png"
            alt="settingsIcon"
            text="Settings"
            />
          <Logout/>
      </Menu>
    );
  };
  export default ExpandedMenu;