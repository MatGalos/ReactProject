import React, { FC, useState } from 'react';
import styled from 'styled-components';
import FilterByTitle from './commentModule/filterByText'
import Followed from '../../Pagination/Followers/Followed';
import CommentsPagination from '../../Pagination/commentsPagination/commentsPagination'

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
`;

const HeaderSection = styled.div`
    display:flex;
    align-items:center;
    padding:5px 0;
`;
const Title = styled.div`
    font-size:18px;
    padding-left:15px;
    font-weight:1000;
    width:200px;
`;
//#endregion

const Comments: FC = () => {
    const [filterValue, setFitlerValue] = useState('');
    const [myPostsOnly, setMyPostsOnly] = useState(false);

    const filterHandler = (val: string) => {
        setFitlerValue(val);
    }
    const myPostsHandler = (val: boolean) => {
        setMyPostsOnly(val);
    }
    return (
        <Wrapper>
            <HeaderSection>
                <Title>
                    Resume your work
                </Title>
                <FilterByTitle
                    filterVal={(val: string) => filterHandler(val)} />
                <Followed
                    myPostsOnly={(val: boolean) => myPostsHandler(val)} 
                    header={myPostsOnly}/>
            </HeaderSection>
            <CommentsPagination
                filterValue={filterValue}
                myPostsOnly={myPostsOnly}
            />
        </Wrapper>
    );
};
export default Comments;