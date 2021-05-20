import React,{FC} from "react";
import styled from 'styled-components';
import AmmountOfFees from '../../profileContent/ammountOfFeesComponent/ammountOfFees'
import InternalReviews from '../../profileContent/internalReviewsComponent/InternalReviews'
import Proposals from '../../profileContent/proposalsComponent/proposals'
import PanelInformations from '../../profileContent/panelInformationsComponent/panelInformations'
import ProfileSettings from '../../profileContent/profileSettingsComponent/profileSettings'

const Wrapper = styled.div`
    justify-content: center;
    align-items:center;
    display:flex;
    flex-direction: column;
`;
const ProfilePanel:FC=()=>{
    return(
        <Wrapper>
            <ProfileSettings />
            <PanelInformations/>
            <Proposals/>
            <InternalReviews/>
            <AmmountOfFees/>
        </Wrapper>
    );
};
export default ProfilePanel;