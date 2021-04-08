import React, { FC } from "react";
import styled from "styled-components";
import IconHolder from "../../IconHolder";
const Input = styled.input`
  width: 1000px;
  border: none;
  height: 30px;
  ::-webkit-input-placeholder {
    text-align: center;
  }
`;
const Wrapper = styled.div`
  border: 1px solid #c5c5c5;
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