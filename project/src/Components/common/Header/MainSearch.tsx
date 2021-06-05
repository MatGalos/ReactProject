import React, { FC } from "react";
import styled from "styled-components";
import IconHolder from "../../IconHolder";
const Input = styled.input`
 width: 850px;
 padding:0 auto;
  outline: none;
  border:none;
  height: 30px;
  ::-webkit-input-placeholder {
    text-align: center;
  }
  &:hover {
    background-color: #fcf7f7; 
  }
  &:active {
    background-color: #e6e6e6; 
  }
  
`;
const Wrapper = styled.div`
  border-bottom: 1px solid #c5c5c5;
  &:hover {
    background-color: #fcf7f7; 
  }
  &:active {
    background-color: #e6e6e6; 
  }
`;
const MainSearch: FC = () => {
  return (
    <>
      <Wrapper>
        <Input placeholder="Wpisz to czego szukasz"></Input>
        <IconHolder
            source="../../../icons/search.png"
            alt="inputlogo"
        />
      </Wrapper>
    </>
  );
};
export default MainSearch;