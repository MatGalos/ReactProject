import React, {FC} from 'react';
import styled from 'styled-components';

interface IWorkspace {
    iconPath: string;
    title: string;
}

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    max-width:1000px;
    background:white;
    box-shadow:0 2px 3px #d3d1d1;
    overflow:hidden;
    padding-bottom:10px;
    margin-bottom:20px;
`;

const PhotoHolder=styled.div`
    width:1000px;
    height:250px;
`;

const Content=styled.div`
    display:flex;
    position:relative;
`;

const IconHolder=styled.div`
display:flex;
    padding:20px;
    margin:0 20px;
    align-items:center;
    justify-content:center;`;

const Icon=styled.img`
transform:scale(2);`;

const Inside=styled.div`
display:flex;
    flex-direction:column;`;

const Title=styled.div`
font-size:20px;
    font-weight:bold;
    color:#1a226b;
    padding:10px 0;`;

const Text=styled.div`
font-size:16px;
color:#afafaf;
padding:10px 30px 10px 0;`;

const Cog=styled.div`
position:absolute;
top:15px;
right:20px;
transform:scale(1.5);
`;

const workspaceDescription:FC<IWorkspace>=(props)=>{
    return(
        <Wrapper>
            <PhotoHolder>
                <img src="https://via.placeholder.com/1000x250"/>
            </PhotoHolder>
            <Content>
                <IconHolder>
                    <Icon src={props.iconPath}/>
                </IconHolder>
                <Inside>
                    <Title>{props.title}</Title>
                    <Text>Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory.</Text>
                </Inside>
                <Cog>
                    <img src={'icons/cog.png'}/>
                </Cog>
            </Content>

        </Wrapper>
    )
}

export default workspaceDescription;