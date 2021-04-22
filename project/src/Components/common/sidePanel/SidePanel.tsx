import React, {FC} from 'react';
import styled from 'styled-components';
import ProfileSection from './profileSection';
import LinksSection from './linksSection';

const Wrapped=styled.div`
    width:23%;
    margin-top:3%;
    height:100%;
    display:flex;
    flex-direction:column;
`

const SidePanel: FC = () =>{
    return(
        <Wrapped>
            <ProfileSection/>
            <LinksSection/>
        </Wrapped>
    );
};
export default SidePanel;