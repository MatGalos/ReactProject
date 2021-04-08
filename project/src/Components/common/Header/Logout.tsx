import {FC} from 'react'
import IconHolder from "../../IconHolder";
import styled from "styled-components";

const LogoutBox=styled.div`
  margin: auto;
  width: 50%;
  padding: 3px;
  color:#a19e9e;
`;

const logout: FC=()=>{
    return(
        <LogoutBox>
            <IconHolder
            source="../../../icons/logout.png"
            alt="Logout"
          />
          <span>Logout</span>
        </LogoutBox>
    );
};

export default logout