import React,{FC} from "react";
import IRTables from './internalReviewsModules/irTable'
import '../../styleHelpers/table.css'
import Components from '../../styleHelpers/Components'

const internalReviews:FC=()=>{
    return(
        <Components>
        <h2>Internal Reviews</h2>
        <IRTables/>
        <h2>See more Reviews</h2>
        </Components>
    );
};
export default internalReviews;