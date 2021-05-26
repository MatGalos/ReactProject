import React,{FC} from "react";
import styled from 'styled-components' 
import IRTables from './proposalsModules/proposalsTable'
import '../../styleHelpers/table.css'
import Components from '../../styleHelpers/Components'

const Header = styled.h2`
    font-size:30px;
    margin-top:5px;
    margin-left:5px;
`;

const SubText = styled.span`
    color:#04434e;
    font-size:30px;
    margin-top:0px;
    cursor: pointer;
    align-self:flex-end;
    margin-right:20px;
`;

const internalReviews:FC=()=>{
    return(
        <Components>
        <Header>Proposals</Header>
        <IRTables/>
        <SubText>See more proposals</SubText>
        </Components>
    );
};
export default internalReviews;