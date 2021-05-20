import React, {FC} from 'react';
import Publication from '../../mainContent/publicationsPage/publication'
import Workspace from '../../mainContent/workspacePage/Workspaces'
import Comments from '../../mainContent/commentPage/Comments'
import styled from 'styled-components';

const Wrapper = styled.div`
    justify-content: center;
    align-items:center;
    display:flex;
    flex-direction: column;
`;

const SidePanel: FC = () =>{
    return(
        <Wrapper>
        <Publication />
        <Workspace />
        <Comments/>
        </Wrapper>
    );
};
export default SidePanel;