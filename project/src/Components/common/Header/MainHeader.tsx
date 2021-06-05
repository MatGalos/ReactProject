import React, { FC } from "react";
import styled from "styled-components";
import MainSearch from "./MainSearch";
import PageSelect from "./PageSelect";
import IconHolder from "../../IconHolder";
import FakeIconHolder from "./fakeIconFolder";
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
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
      <Link to='/'>
        <IconHolder
            source="../icons/ecosystem.png"
            alt="siteLogo"
        />
        </Link>
      <PageSelect />
      <MainSearch />
      <Icons>
          <IconHolder
            source ="./icons/house.png"
            alt="houseLogo"
          />
          <FakeIconHolder
            source ="./icons/comments.png"
            alt="commentsLogo"
            fakeNotCounter={Math.floor(Math.random()*(100-1))+1}
          />
          <FakeIconHolder
            source ="./icons/bell.png"
            alt="alertLogo"
            fakeNotCounter={Math.floor(Math.random()*(100-1))+1}
          />
      </Icons>
    </Wrapper>
  );
};
export default MainHeader;