import React, { FC } from 'react';
import styled from 'styled-components';
import OptionField from './optionField';

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    margin-top:10px;
    font-size:18px;
    color:#1c44c7;
`;

const AddWrapper = styled.div`
    display:flex;
    align-items:center;
    width:120px;
`;
const IconHolder = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:10px;
`;
const add: FC = () => {
    return (
        <Wrapper>
            <AddWrapper>
                <IconHolder>
                    <img src='icons/plus.png' alt='plusIcon' />
                </IconHolder>
                Add filter
            </AddWrapper>
            <OptionField text={'choose property'}/>
        </Wrapper>
    );
}
export default add;