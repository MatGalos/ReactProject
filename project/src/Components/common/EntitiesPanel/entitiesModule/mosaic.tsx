import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    overflow:hidden;
    align-items:center;
    height:30px;
    margin:10px;
`;

type ViewDiv = {
    isSelected: boolean;
}
const OptionHolder = styled.div<ViewDiv>`
    background: ${props => props.isSelected ? `#4174c0` : 'white'};
    color: ${props => props.isSelected ? `black` : '#7a7a7a'};
    padding:10px;
    font-size:16px;
    font-weight:bold;
`;
interface IMosaic {
    switchView(): void;
    isMosaic: boolean;
}
const mosaic: FC<IMosaic> = (props) => {
    return (
        <Wrapper>
            <OptionHolder isSelected={props.isMosaic} onClick={props.switchView}>Mosaic</OptionHolder>
            <OptionHolder isSelected={!props.isMosaic} onClick={props.switchView}>List</OptionHolder>
        </Wrapper>
    );
}
export default mosaic;