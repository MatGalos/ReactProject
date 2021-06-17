import React, {FC} from 'react';
import styled from 'styled-components';
import PictureSection from './profilePicture';
import YourLinksSection from './userLinkSection';
import {useSelector} from 'react-redux';
import {IState} from '../../../Reducers';
import {IUsersReducer} from '../../../Reducers/usersReducers';
import { Link } from 'react-router-dom';

const CustomLink = styled(Link)`
    text-decoration: none;
`;

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin:10px 20px 0 20px;
    background-color: #fff;
    box-shadow: 0px 3px 4px #c5c5c5;
`;

const SidePanel: FC = () =>{
    const { usersList} = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
    }));

    return(
        <Wrapper>
            <CustomLink to={"/profile"}>
            {usersList[0] &&
                <PictureSection
                    userName={usersList[1].name}
                    picId={"2"}
                    jobTitle={"Job title"}
                    company={usersList[1].company.name}
                />}
            </CustomLink>
            <YourLinksSection />
        </Wrapper>
    );
};
export default SidePanel;