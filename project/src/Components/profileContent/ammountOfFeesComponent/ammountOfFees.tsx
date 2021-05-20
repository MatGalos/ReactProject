import React,{FC} from "react";
import AOFTable from './ammountOfFeesModules/aofTable'
import Components from '../../styleHelpers/Components'
import '../../styleHelpers/table.css'

const AmmountOfFees:FC=()=>{
    return(
        <Components>
            <h2>Ammount of fees </h2>
            <AOFTable/>
        </Components>
    );
};
export default AmmountOfFees;