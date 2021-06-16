import React,{FC,useState} from "react";
import styled from 'styled-components';
import AmmountOfFees from '../../profileContent/ammountOfFeesComponent/ammountOfFees'
import InternalReviews from '../../profileContent/internalReviewsComponent/InternalReviews'
import Proposals from '../../profileContent/proposalsComponent/proposals'
import PanelInformations from '../../profileContent/panelInformationsComponent/panelInformations'
import ProfileSettings from '../../profileContent/profileSettingsComponent/profileSettings'
import Categories from '../../profileContent/panelInformationsComponent/categories'

const Wrapper = styled.div`
    width:1000px;
    background-color:'#FFF';
    position:relative;
`;
const EditButton = styled.button`
    width:30px;
    height:30px;
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:transparent;
    outline:none;
    border:none;
    cursor: pointer;
    right:15px;
    top:140px;
`;

const ButtonImg = styled.img`
    width:20px;
    height:20px;
`;
const ProfilePanel:FC=()=>{
    const [isEdit, isEditHandler] = useState(false);
    const handleSubmit = () => { isEditHandler(!isEdit) }  
    return(
        <Wrapper>
            <ProfileSettings />
            <EditButton onClick={() => handleSubmit()}>
            <ButtonImg src={'../icons/settings.png'}/>
            </EditButton>
            <Categories isEditable={isEdit}/>
            <PanelInformations isEditable={isEdit} />
            <Proposals/>
            <InternalReviews/>
            <AmmountOfFees/>
        </Wrapper>
    );
};
export default ProfilePanel;