import React, {FC} from 'react';
import styled from 'styled-components';
import ProfileSection from './profileSection';
import LinksSection from './linksSection';

const Wrapped=styled.div`
    width:23%;
    padding-top:30px;
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