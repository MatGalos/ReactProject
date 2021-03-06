import React, {FC, useState,useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import ReactPaginate from 'react-paginate';
import {IState} from '../../../Reducers'
import {IUsersReducer} from '../../../Reducers/usersReducers';
import {IPostsReducer} from '../../../Reducers/postReducers';
import {IPhotosReducer} from '../../../Reducers/photosReducers';
import {ICommentsReducer} from '../../../Reducers/commentReducers';
import {ISingleComment} from '../../../entities/comments';
import SingleComment from '../../mainContent/commentPage/commentModule/singleComment'

const Wrapper = styled.div`
    ul {
        
        display:flex;
        justify-content:center;
        align-items:center;
        color:#1d8aa5;
        padding: 10px 0;
        font-weight:bold;
        li {
            width:auto;
            min-width:35px;
            height:30px;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        .active{
            color:black;
        }
    }
`;
interface ICommentsPagination {
    filterValue: string;
    myPostsOnly: boolean;
    currentPage:number;
    setCurrentPage(val:number):void;
}

const CommentsPagination: FC<ICommentsPagination> = (props) => {

    const { usersList, postsList, photosList, commentsList } = useSelector<IState, IUsersReducer & IPostsReducer & IPhotosReducer & ICommentsReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
        ...globalState.posts,
        ...globalState.comments
    }));
    const [filterValue, setFilterValue] = useState('');
    const [myPostsOnly, setMyPostsOnly] = useState(false);
    const [forcedFirstPage, setForcedPage] = useState(0);
    useEffect(() => {
        setFilterValue(props.filterValue);
        setMyPostsOnly(props.myPostsOnly);
        setForcedPage(0);
    }, [props.filterValue, props.myPostsOnly]);
    
    const filterHandler = (comment: ISingleComment) => {
        const filter = filterValue.trim().toLowerCase();
        const titleIncludes: boolean = comment.name.toLowerCase().includes(filter) ? true : false;
        if (myPostsOnly) {
            if (usersList?.[postsList?.[postsList?.findIndex(el => el.id === comment.postId)]?.id - 1]?.id === 1)
            return titleIncludes;
            return false;
        }
        return titleIncludes;
    }
    const filteredComments = usersList &&
    postsList &&
    photosList &&
    commentsList &&
    commentsList?.filter(comment => filterHandler(comment));
    
    const handlePageClick = (data: any) => {
        let selected = data.selected;
        props.setCurrentPage(selected * 10)
    };
    return (
        <Wrapper>
            <div className="commentBox">
                {filteredComments.slice(props.currentPage, props.currentPage + 10).map((comment, index) => {
                    return <SingleComment
                        key={index}
                        title={comment.name}
                        body={comment.body}
                        photoUrl={photosList?.[postsList?.[postsList?.findIndex(el => el.id === comment.postId)]?.id - 1]?.url}
                        userName={usersList?.[postsList?.[postsList?.findIndex(el => el.id === comment.postId)]?.id - 1]?.name}
                    />
                })}
                <ReactPaginate
                    previousLabel={'PREVIOUS'}
                    nextLabel={'NEXT'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={Math.ceil(filteredComments.length / 10)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    initialPage={0}
                    forcePage={forcedFirstPage}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </div>
        </Wrapper>
    )
}

export default CommentsPagination;