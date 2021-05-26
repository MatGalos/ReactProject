import React,{FC} from "react";
import IRTables from './internalReviewsModules/irTable'
import '../../styleHelpers/table.css'
import Components from '../../styleHelpers/Components'
import styled from 'styled-components'

const Header = styled.h2`
    font-size:30px;
    margin-top:5px;
    margin-left:5px;
`;

const internalReviews:FC=()=>{
    return(
        <Components>
        <Header>Internal Reviews</Header>
        <IRTables/>
        <Header>See more Reviews</Header>
        </Components>
    );
};
export default internalReviews;