import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 790px;
    display:flex;
    justify-content:flex-end;
    margin-right:30px;
`;
const Input = styled.input`
    border: none;
    width:180px;
    &:focus{
        border: none;
        box-shadow:none;
        outline-offset: 0px;
        outline: none;
        background-color: #e6e6e6; 
    }
    
    padding-left:5px;
`;
const InputWrapper = styled.div`
    display:flex;
    height:37px;
    border-bottom: 1px solid #c5c5c5;
    border-radius:5px;
    box-sizing:border-box;
    overflow:hidden;
    &:hover {
    background-color: #fcf7f7; 
  }
  &:active {
    background-color: #e6e6e6; 
  }
`;
const SearchIcon = styled.div`
    width:40px;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    background:white;
`;
interface IFilterByTitle{
    filterVal(val:string):void;
}
const FilterByTitle: FC<IFilterByTitle> = (props) => {

    return (
        <Wrapper>
            <InputWrapper>
                <Input 
                onChange={(e) => props.filterVal(e.target.value)}
                placeholder="Filter by title..." />
                <SearchIcon>
                    <img src="../../../icons/search.png" alt="searchIcon" />
                </SearchIcon>
            </InputWrapper>
        </Wrapper>
    );
};
export default FilterByTitle;