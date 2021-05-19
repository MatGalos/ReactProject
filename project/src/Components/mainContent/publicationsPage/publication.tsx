import styled from 'styled-components';
import React, { FC } from 'react';
import MainPhoto from './publicationsModules/MainPhoto';
import SidePublications from './publicationsModules/sidePublications';

const Wrapper = styled.div`
    width:auto;
    border-radius:4px;
    box-shadow: 0px 2px 2px #c5c5c5;
    margin-bottom:20px;
    display:flex;
    overflow:hidden;
`;
const Publications: FC = () => {
    return (
            <Wrapper>
                <MainPhoto />
                <SidePublications />
            </Wrapper>
    );
};

export default Publications