import React, {FC} from 'react';
import styled from 'styled-components';

const Wrapper=styled.div`
display:flex;
flex-direction:column;
align-items:center;
box-sizing:border-box;
background-color:#f7f4f4;
padding:15px 20px;
margin-bottom:20px;
width:100%;
max-width:1200px;
`;

const Title=styled.div`
width:100%;
display:flex;
color:#8f8f8f;
justify-content:space-between;
font-weight:bold;
padding-bottom:15px;
box-sizing:border-box;
`;

const TitleWrapped=styled.div`

width:100%;
display:flex;
justify-content:space-between;
`;

const Tile=styled.div`
display:flex;
position:relative;
flex-direction:column;
justify-content:flex-end;
color:#0e156d;
font-size:15px;
padding: 25px 15px;
width:275px;
background:white;
box-shadow:0 2px 5px #d4d4d4;
`;

const Headline = styled.div`
    font-size:18px;
    padding:10px 0;
`;

const Text=styled.div`
display:flex;
`;
const IconHolder = styled.div`
    display:flex;
    position:relative;
    padding-left:10px;
    padding-bottom:10px;
`;
const BackgroundIconHolder = styled(IconHolder)`
    position:absolute;
    top:40px;
    right:40px;
`;
const BigIcon = styled.img`
    transform:scale(1.5);
`;
const BackgroundIcon = styled.img`
    transform:scale(3);
    opacity:0.1;
`;
const adBanner:FC=()=>{
    return(
        <Wrapper>
            <Title>
                <span>Start working on corporate matters</span>
                <span>Hide</span>
            </Title>
            <TitleWrapped>
                <Tile>
                    <IconHolder>
                        <BigIcon src='icons/entities.png' />
                    </IconHolder>
                    <BackgroundIconHolder>
                        <BackgroundIcon src='icons/entities.png' />
                    </BackgroundIconHolder>
                    <Headline>
                        <span>Explore your <b>entities&nbsp;</b></span>
                    </Headline>
                    <Text>Take a few minutes to look at the most important elements and specificities of your entities.</Text>
                </Tile>
                <Tile>
                    <IconHolder>
                        <BigIcon src='icons/administration.png' />
                    </IconHolder>
                    <BackgroundIconHolder>
                        <BackgroundIcon src='icons/administration.png' />
                    </BackgroundIconHolder>
                    <Headline>
                        <span>Structure the <b>ownership&nbsp;</b></span>
                    </Headline>
                    <Text>Get a clear view of the ownership by looking at the relations between individuals and entities.</Text>
                </Tile>
                <Tile>
                    <IconHolder>
                        <BigIcon src='icons/bell.png' />
                    </IconHolder>
                    <BackgroundIconHolder>
                        <BackgroundIcon src='icons/bell.png' />
                    </BackgroundIconHolder>
                    <Headline>
                        <span>Define the <b>calendar&nbsp;</b></span>
                    </Headline>
                    <Text>Prepare future events by creating detailed plans around the life of your entity.</Text>
                </Tile>
            </TitleWrapped>
        </Wrapper>
    );
}

export default adBanner;