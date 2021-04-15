import React, {FC} from 'react';
import styled from 'styled-components';
import PictureSection from './profilePicture';
import YourLinksSection from './userLinkSection';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin:10px 20px 0 20px;
    border-radius:3px;
    background-color: #fff;
    box-shadow: 0px 3px 4px #c5c5c5;
`;

const SidePanel: FC = () =>{
    return(
        <Wrapper>
            <PictureSection
            name={"Mateusz Galos"}
            picId={"2"}
            jobTitle={"Job title"}
            company={"Company"}
            />
            <YourLinksSection/>
        </Wrapper>
    );
};
export default SidePanel;