import React, {FC} from 'react';
import styled from 'styled-components';
import Disabled from './dropDownModules/disabled';
import OptionField from './dropDownModules/optionField';
import Delete from './dropDownModules/delete';
import Add from './dropDownModules/add';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    padding:10px 20px 15px 20px;
    background:white;
    box-shadow:0 2px 5px black;
    position:absolute;
    margin-top:10px;
`;
const Header = styled.div`
    color:#c2c1c1;
    font-size:14px;
    margin-bottom:10px;
`;
const Filter = styled.div`
    display:flex;
    align-items:center;
    padding:5px;
`;

const dropDown:FC=()=>{
    return(
        <Wrapper>
            <Header>
            Rows are filtered by the following conditions starting from the top.
            </Header>
            <Filter>
                <Delete text={"Where"} />
                <OptionField text={"Company"} />
                <OptionField text={"Contains"} />
                <Disabled text={"Enter..."}/>
            </Filter>
            <Filter>
                <Delete text={"Where"} />
                <OptionField text={"Status"} />
                <OptionField text={"Is"} />
                <Disabled text={"Enter..."}/>
                <OptionField text={"In"} />
                <Disabled text={"Enter..."}/>
            </Filter>
            <Filter>
                <Delete text={"And"} />
                <OptionField text={"Status"} />
                <OptionField text={"Ends before"} />
                <Disabled text={"Enter..."}/>
                <OptionField text={"In"} />
                <Disabled text={"Enter..."}/>
            </Filter>
            <Filter>
                <Add />
            </Filter>
        </Wrapper>
    )
}

export default dropDown