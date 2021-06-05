import React, { FC } from "react";
import styled from "styled-components";
import ExpandedMenu from "./ExpandedMenu";
import useDropdown from "react-dropdown-hook";
import { useLocation } from 'react-router-dom'

const Wrapper = styled.div`
  width: 450px;
  display: flex;
  margin-left:75px;
  align-items: center;
`;

const ActualPageName = styled.div`
  width: 250px;
  margin: 30px;
`;
const InnerWrapper = styled(Wrapper)`
  width: 375px;
  height:30px;
  flex-direction:row;
  position:relative;
  margin: 0;
  &:hover {
    background-color: #fcf7f7; 
  }
  &:active {
    background-color: #e6e6e6; 
  }
`;
export const IconHolder = styled.div`
  width:40px;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    
`;

const PageSelect: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
    const menuHandler = () => {
        toggleDropdown();
    };
    const location = useLocation();

    const closeMenu = () => {
        closeDropdown();
    }
    const locationHandler = (path: string): string => {
        switch (path) {
            case "/":
                return "Home";
            case "/publications":
                return "Publications";
            case "/entities":
                return "Entities";
            case "/workspaces":
                return "Workspaces";
            case "/profile":
                return "Profile";
            default:
                return "Main";
        }
    }
    return (
        <Wrapper>
            <div ref={wrapperRef}>
                <InnerWrapper onClick={menuHandler}>
                    <IconHolder>
                        <img src="../../../icons/house2.png" alt="inSearchLogo" />
                    </IconHolder>
                    <ActualPageName>{locationHandler(location.pathname)}</ActualPageName>
                    <IconHolder>
                        <img src="../../../icons/arrow-down.png" alt="arrowDropdown" />
                    </IconHolder>
                </InnerWrapper>
                {dropdownOpen && <ExpandedMenu closeDropMenu={closeMenu} />}
            </div>
        </Wrapper>
    );
};
export default PageSelect;