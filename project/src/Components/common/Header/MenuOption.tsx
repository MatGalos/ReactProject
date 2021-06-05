import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconHolder } from "./PageSelect";


const Wrapper = styled.div`
    width:100%;
    height:30px;
    display:flex;
    align-items:center;
    &:hover {
    background-color: #fcf7f7; 
  }
  &:active {
    background-color: #e6e6e6; 
  }
`;
const CustomLink = styled(Link)`
    text-decoration: none;
    color:black;
    
`;
export interface IMenuOption {
    imgSource: string;
    alt: string;
    text: string;
    linkTo: string;
}

interface IMenuOptionProps extends IMenuOption {
    closeDropMenu(): void;
}

const MenuOption: FC<IMenuOptionProps> = (props) => {

    const optionClick = () => {
        props.closeDropMenu();
    }

    return (
        <CustomLink to={props.linkTo}>
            <Wrapper onClick={optionClick}>
                <IconHolder>
                    <img src={props.imgSource} alt={props.alt} />
                </IconHolder>
                {props.text}
            </Wrapper>
        </CustomLink>
    );
};

export default MenuOption;