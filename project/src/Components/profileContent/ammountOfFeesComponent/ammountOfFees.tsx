import React,{FC} from "react";
import AOFTable from './ammountOfFeesModules/aofTable'
import Components from '../../styleHelpers/Components'
import '../../styleHelpers/table.css'
import styled from 'styled-components'

const Header = styled.h2`
    font-size:30px;
    margin-top:5px;
    margin-left:5px;
`;

const AmmountOfFees:FC=()=>{
    return(
        <Components>
            <Header>Ammount of fees </Header>
            <AOFTable/>
        </Components>
    );
};
export default AmmountOfFees;