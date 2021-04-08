import React, { FC } from "react";
import styled from "styled-components";
import MainSearch from "./MainSearch";
import PageSelect from "./PageSelect";
import IconHolder from "../../IconHolder";

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  align-items: center;
  display: flex;
  box-shadow: -0px 0px 5px #d4d4d4;
`;

const Icons = styled.div`
  width: 22%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MainHeader: FC = () => {
    
  return (
    <Wrapper>
        <IconHolder
            source="../icons/ecosystem.png"
            alt="siteLogo"
        />
      <PageSelect />
      <MainSearch />
      <Icons>
          <IconHolder
            source ="./icons/house.png"
            alt="houseLogo"
          />
          <IconHolder
            source ="./icons/comments.png"
            alt="commentsLogo"
          />
          <IconHolder
            source ="./icons/bell.png"
            alt="alertLogo"
          />
      </Icons>
    </Wrapper>
  );
};
export default MainHeader;