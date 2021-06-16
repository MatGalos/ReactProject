import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    width:80px;
    align-items:center;
    font-weight:bold;
    color:#21438d;
    background:#a3c0ff;
    margin:0 10px;
    padding:5px;
    box-shadow:0 2px 3px #c5c5c5;
    justify-content:space-evenly;
`;
const allDiv: FC = () => {
    return (
        <Wrapper>
            All
            <img src='icons/arrow-down.png' alt='arrowIcon' />
        </Wrapper>
    );
}
export default allDiv;