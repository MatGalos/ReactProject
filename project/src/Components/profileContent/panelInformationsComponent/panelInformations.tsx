import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styleHelpers/Colors';
import { fontSize } from '../../styleHelpers/FontSizes';
import Correspondant from './panelInformationsModule/panelInformationsModule/correspond';
import { IUsersReducer } from '../../../Reducers/usersReducers';
import { IState } from '../../../Reducers';
import { useSelector } from 'react-redux';
import Select from 'react-select';

const Wrapper = styled.div`
   width:1000px;
    padding:10px;
    box-sizing:border-box;
    border: 2px solid #F5F7F9;
    box-shadow: 0px 3px 4px #c5c5c5;
    display:flex;
    flex-direction:column;
`;

const Title = styled.div`
    color:${Colors.darkBlue};
    margin-top:10px;
`;
const SmallTitle = styled.div`
    color:${Colors.gray};
    margin-top:15px;
    font-size:${fontSize[14]};
`;
const Text = styled.div`
    color:${Colors.blue};
    font-size:${fontSize[14]};
    margin-top:10px;
`;
const AttachCV = styled.div`
    width: 550px;
    height:30px;
    background-color:${Colors.lightGray};
    display:flex;
    align-items:center;
    font-size:${fontSize[14]};
    margin-top:5px;
`;

const AttachImg = styled.img`
    width:20px;
    height:20px;
    margin:0px 10px;
`;

const CustomInput = styled.input`
    height:38px;
    outline:none;
    box-sizing:border-box;
    padding:3px;
    border:1px solid ${Colors.lightGray};
    border-radius:4px;
    font-size:${fontSize[16]};
    transition: .09s;
    &:focus{
        border:2px solid #2684ff;
    }
`;

const CustomSelectCurrency = styled(Select)`
    width:80px;
`
const CustomSelectUser = styled(Select)`
    min-width:180px;
    max-width:300px;
`
const RowSelects = styled.div`
    display:flex;
    align-items:center;
`;


interface IJobInfo{
    isEditable: boolean;
}

interface ISelect{
    value:string;
    label:string;
}

const currencies: ISelect[] = [
    {value:'$', label:'$'},
    {value:'PLN', label:'PLN'},
    {value:'€', label:'€'},
    {value:'£', label:'£'},
];

export const JobInfo: FC<IJobInfo> = (props) =>{

    const { usersList} = useSelector<IState, IUsersReducer>(globalState =>({
        ...globalState.users,
    }));

    const [data, setData] = useState({
        salary: '900',
        currency: {value: '€', label: '€'},
        negociated: true,
        terms: 'Montly 100k € retainer ',
        file: 'xD.png',
        services: 'Corparate with Google and Bing',
        userOneID: {value: 4, label: 'Clementine Bauch'},
        userTwoID: {value: 3, label: 'Clementine Bauch'},
    });

    const currencyChange = (val) => setData({...data,currency: val});
    const userOneChange = (val) => setData({...data,userOneID: val});
    const userTwoChange = (val) => setData({...data,userTwoID: val});

    return(
        <Wrapper> 
            <Title>Panel informations</Title>
            <SmallTitle>Hourly fee</SmallTitle>
            <Text>
                {
                !props?.isEditable ? (`${data?.salary}${data?.currency.value}/day ${data?.negociated ? '(Negociated)' : '(Non-negotiable)'}`)
                            :(<RowSelects>
                                <CustomInput type='text' value={data?.salary} onChange={e => setData({...data, salary: e.target.value})}/>
                                <CustomSelectCurrency
                                onChange={currencyChange}
                                options={currencies}
                                value={data?.currency}
                                /> 
                                <CustomInput type='checkbox' checked={data?.negociated} onChange={e => setData({...data, negociated: e.target.checked})}/>(Negociated)
                            </RowSelects>)
                }  
            </Text>
            <SmallTitle>Terms & conditions</SmallTitle>
            <Text>
                {
                !props?.isEditable ? data?.terms
                            :(<CustomInput type='text' value={data?.terms} onChange={e => setData({...data, terms: e.target.value})}/>)
                }  
            </Text>
            <AttachCV><AttachImg src='../icons/file.png'/>
                
            </AttachCV>
            <Title>Services and Projects</Title>
            <Text>
                {
                !props?.isEditable ? data?.services
                            :(<CustomInput type='text' value={data?.services} onChange={e => setData({...data, services: e.target.value})}/>)
                }  
            </Text>
            <Title>Internal Correspondants</Title>
            {
                !props?.isEditable ? (<Correspondant userId={`${data?.userOneID.value}`}/>) 
                :(
                    <>
                        <CustomSelectUser
                                onChange={userOneChange}
                                options={usersList?.map(el => ({value:`${el.id}`, label: `${el.name}`}))}
                                value={data?.userOneID}
                        /> 
                    </>
                )
            }
            {
                !props?.isEditable ? (<Correspondant userId={`${data?.userTwoID.value}`}/>) 
                :(
                <CustomSelectUser
                onChange={userTwoChange}
                options={usersList?.map(el => ({value:`${el.id}`, label: `${el.name}`}))}
                value={data?.userTwoID}
                /> 
                )
            }
        </Wrapper>
    );
};

export default JobInfo;
