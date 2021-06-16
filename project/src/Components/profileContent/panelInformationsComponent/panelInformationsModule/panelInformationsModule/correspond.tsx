import React, {FC} from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../styleHelpers/Colors';
import { fontSize } from '../../../../styleHelpers/FontSizes';
import { useSelector } from 'react-redux';
import { IState } from '../../../../../Reducers';
import { IPhotosReducer } from '../../../../../Reducers/photosReducers';
import { IUsersReducer } from '../../../../../Reducers/usersReducers';

const Wrapper = styled.div`
    width: 550px;
    height:30px;
    background-color:${Colors.lightGray};
    display:flex;
    align-items:center;
    font-size:${fontSize[14]};
    margin-top:5px;
    display:flex;
    align-items:center;
`;

const Avatar = styled.img`
    width:25px;
    height:25px;
    border-radius:30px;
    margin-left:5px;
`;

const Name = styled.span`
    color: ${Colors.blue};
    font-weight:bold;
    margin-left:5px;
    text-overflow:ellipsis;
    overflow: hidden;
    height:25px;
    font-size:${fontSize[16]};
    flex-grow:1;
`;

const ButtonsContainter = styled.div`
    justify-self:flex-end;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    width:200px;
    margin-right:50px;
`;

const Button = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:${fontSize[16]};
    color:${Colors.blue};
    margin:0px 10px;
    cursor: pointer;
`;

const Icon = styled.img`
    height:20px;
    width:20px;
    margin-right:5px;
`;

interface ICorrespondant{
    userId: string;
}

export const Correspondant:FC<ICorrespondant> = (props) => {

    const { usersList, photosList } = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState =>({
        ...globalState.users,
        ...globalState.photos
    }));

    return(
        <Wrapper>
            <Avatar src={photosList?.filter(el => el?.id === parseInt(props?.userId))[0]?.url}/>
            <Name>
            {usersList?.filter(el => el.id === parseInt(props?.userId))[0]?.name}
            </Name>
            <ButtonsContainter>
                <Button>
                    <Icon src='../icons/comments.png'/> Message
                </Button>
                <Button>
                    <Icon src='../icons/people.svg'/> Profile
                </Button>
            </ButtonsContainter>
        </Wrapper>
    );
};

export default Correspondant;