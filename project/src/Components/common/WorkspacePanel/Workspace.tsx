import React, {FC} from 'react';
import styled from 'styled-components';
import Comments from '../../mainContent/commentPage/Comments'
import AdBanner from './workspaceModules/adBanner'
import WorkspaceDescription from './workspaceModules/workspaceDescription'

const Wrapper = styled.div`
    justify-content: center;
    align-items:center;
    display:flex;
    flex-direction: column;
`;

interface IWorkspace {
    icon: string;
    title: string;
}

const workspace: FC<IWorkspace> = (props)=>{

    return(
        <Wrapper>
        <WorkspaceDescription iconPath={props.icon} title={props.title} />
        <AdBanner />
        <Comments />
        </Wrapper>
    )
}

export default workspace