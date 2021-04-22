import React, { FC } from "react";
import styled from "styled-components";
import MenuOption from "./MenuOption";
import Logout from "./Logout";
import {
  Link
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

const CustomLink = styled(Link)`
    text-decoration: none;
    color:#0d2463;
`;




const ExpandedMenu: FC = () => {
    return (
      <Menu>
            <input placeholder="Filter..."></input>
            <Category>Platform</Category>
            <CustomLink to={"/"}>
            <MenuOption
              source="../../../icons/house2.png"
              alt="houseIcon"
              text="Home"
            />
            </CustomLink>
            <CustomLink to={"/publications"}>
            <MenuOption
              source="../../../icons/publications.png"
              alt="publicationsIcon"
              text="Publications"
            />
            </CustomLink>
            <CustomLink to={"/people"}>
            <MenuOption
              source="../../../icons/people.png"
              alt="PeopleIcon"
              text="People"
            />
            </CustomLink>
            <CustomLink to={"/entities"}>
            <MenuOption
              source="../../../icons/entities2.png"
              alt="EntitiesIcon"
              text="Entities"
            />
            </CustomLink>
            <CustomLink to={"/administration"}>
            <MenuOption
              source="../../../icons/administration.png"
              alt="administrationIcon"
              text="Administration"
            />
            </CustomLink>
            <Category>Workspace</Category>
            <CustomLink to={"/client_contact"}>
            <MenuOption
              source="../../../icons/administration.png"
              alt="administrationIcon"
              text="Client Contact"
            />
            </CustomLink>
            <CustomLink to={"/supplier_contact"}>
            <MenuOption
              source="../../../icons/administration.png"
              alt="administrationIcon"
              text="Supplier Contact"
            />
            </CustomLink>
            <CustomLink to={"/corporate"}>
            <MenuOption
              source="../../../icons/entities.png"
              alt="administrationIcon"
              text="Corporate"
            />
            </CustomLink>
            <CustomLink to={"/group"}>
            <MenuOption
              source="../../../icons/administration.png"
              alt="administrationIcon"
              text="Group Name"
            />
            </CustomLink>
            <CustomLink to={"/real_estate_contact"}>
            <MenuOption
              source="../../../icons/administration.png"
              alt="administrationIcon"
              text="Real estate Contact"
            />
            </CustomLink>
            <Category>Account</Category>
            <CustomLink to={"/privacy"}>
            <MenuOption
              source="../../../icons/privacy.png"
              alt="privacyIcon"
              text="Privacy"
            />
            </CustomLink>
            <CustomLink to={"/settings"}>
            <MenuOption
              source="../../../icons/settings.png"
              alt="settingsIcon"
              text="Settings"
            />
            </CustomLink>
            <Logout/>
      </Menu>
    );
  };
  export default ExpandedMenu;