  
import React, { FC } from 'react';
import styled from 'styled-components';
import CommentInfo from './commentInfo';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:1000px;
    box-shadow: 0 2px 5px #c5c5c5;
    margin-bottom:10px;
    padding:0 15px;
    box-sizing:border-box;
`;
const Title = styled.div`
    font-size:20px;
    color:#1045a8;
    padding:5px 0;
`;
const Body = styled.div`
    font-size:16px;
    padding:5px 0;
`;

interface ISingleComment {
    title: string;
    body: string;
    photoUrl: string;
    userName: string;
}

const SingleComment: FC<ISingleComment> = (props) => {
    return (
        <Wrapper>
            <Title>
                {props.title}
            </Title>
            <Body>
                {props.body}
            </Body>
            <CommentInfo
            photoUrl={props.photoUrl}
            userName={props.userName}
            />
        </Wrapper>
    );
};

export default SingleComment;