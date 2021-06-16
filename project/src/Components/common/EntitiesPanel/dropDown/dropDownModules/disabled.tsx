import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    padding:5px;
    width:120px;
    background:#ececec;
    margin: 0 10px;
`;
interface IDisabled {
    text: string;
}
const Disabled: FC<IDisabled> = (props) => {
    return (
        <Wrapper>
            {props.text}
        </Wrapper>
    );
}
export default Disabled;