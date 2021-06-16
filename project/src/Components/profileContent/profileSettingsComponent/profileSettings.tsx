import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserFunction } from './profileSettingsModule/profileInfo';
import { Colors } from '../../styleHelpers/Colors';
import { useSelector } from 'react-redux';
import { IState } from '../../../Reducers';
import { IPhotosReducer } from '../../../Reducers/photosReducers';
import { IUsersReducer } from '../../../Reducers/usersReducers';
import { CustomInput } from '../../styleHelpers/comp';

const Wrapper = styled.div`
    width:1000px;
    padding:10px;
    box-sizing:border-box;
    border: 2px solid #F5F7F9;
    box-shadow: 0px 3px 4px #c5c5c5;
    display:flex;
    flex-direction:column;
`;
const FunctionSection = styled.div`
    display:flex;
    justify-content:flex-end;
`;

const AvatarSection = styled.div`
    display:flex;
    flex-direction:column;
    height:100px;
    /* padding:5px; */
`;

const UserAvatar = styled.img`
    width:75px;
    height:75px;
    border-radius:75px;
`;
const UserAvatarText = styled.span`
`;

const UserSection = styled.div`
    display:flex;
`;

const UserData = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    margin-left:25px;
`;

const UserDataTextBold = styled.span`
    color:${Colors.blue};
    font-weight:bold;
`;

const UserText = styled.span`
    color:${Colors.blue};
`;

const UserContact = styled.div`
    flex-grow:1;
    display:flex;
    padding:5px;
    flex-direction:column;
    justify-content:flex-end;
    align-items:flex-end;
`;

const EditButton = styled.button`
    width:30px;
    height:30px;
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:transparent;
    outline:none;
    border:none;
    cursor: pointer;
    right:15px;
    top:30px;
`;
const ButtonImg = styled.img`
    width:20px;
    height:20px;
`;

const CustomInputUser = styled(CustomInput)`
    width:200px;
    &:focus{
        border:1px solid #2684ff;
    }
`;

interface IAboutUser{
    name:string;
    userName:string;
    email:string;
    city:string;
    phone:string;
    companyName:string;
    avatar:string;
}

export const AboutUser: FC = () =>{

    const { usersList, photosList } = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState =>({
        ...globalState.users,
        ...globalState.photos
    }));

    const [isEdit, isEditHandler] = useState(false);

    const handleSubmit = () => {isEditHandler(!isEdit)}

    const [data, setData] = useState({
        phone: '',
        city: '',
        name: '',
        companyName: '',
        email: '',
        text: '',
    });
    
    useEffect(() => {
        const newData = {
            phone: "010-692-6593 x09125",
            city: "Wisokyburgh",
            name: 'Ervin Howell',
            companyName: "Deckow-Crist",
            email: "Shanna@melissa.tv",
            text: 'Parnter'
        }
        setData(newData);
      },[usersList]);

    return(
        <Wrapper>
            <EditButton onClick={() => handleSubmit()}><ButtonImg src='../icons/settings.png'/></EditButton>
            <FunctionSection>
                    <UserFunction text="Message" icon='../icons/plus.png'/>
                    <UserFunction text="Create a request" icon='../icons/plus.png'/>
                    <UserFunction text="Add to cluster" icon='../icons/plus.png'/>
            </FunctionSection>
            <UserSection>
                <AvatarSection>
                    <UserAvatar src={photosList?.filter(el => el?.id === usersList[9].id)[0]?.url}/>
                    <UserAvatarText>See profile</UserAvatarText>
                </AvatarSection>
                <UserData>
                    <UserDataTextBold>
                    {
                    !isEdit ? data?.name
                            :(<CustomInputUser type='text' value={data?.name} onChange={e => setData({...data, name: e.target.value})}/>)
                    }  
                    </UserDataTextBold>
                    <UserDataTextBold>
                    {
                    !isEdit ? data?.companyName
                            :(<CustomInputUser type='text' value={data?.companyName} onChange={e => setData({...data, companyName: e.target.value})}/>)
                    }  
                    </UserDataTextBold>
                    <UserText>
                    {
                    !isEdit ? data?.city
                            :(<CustomInputUser type='text' value={data?.city} onChange={e => setData({...data, city: e.target.value})}/>)
                    }    
                    </UserText>
                    <UserText>
                    {
                    !isEdit ? data?.text
                            :(<CustomInputUser type='text' value={data?.text} onChange={e => setData({...data, text: e.target.value})}/>)
                    }  
                    </UserText>
                </UserData>
                <UserContact>
                    <UserText>
                    {
                    !isEdit ? data?.email
                            :(<CustomInputUser type='text' value={data?.email} onChange={e => setData({...data, email: e.target.value})}/>)
                    }  
                    </UserText>
                    <UserText>
                    {
                    !isEdit ? data?.phone
                            :(<CustomInputUser type='text' value={data?.phone} onChange={e => setData({...data, phone: e.target.value})}/>)
                    }
                    </UserText>
                </UserContact>
            </UserSection>
        </Wrapper>
    );
};

export default AboutUser;