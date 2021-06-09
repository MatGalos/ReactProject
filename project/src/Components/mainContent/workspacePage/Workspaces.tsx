import React, { FC } from 'react';
import styled from 'styled-components';
import SingleWorkspace from './workspaceModules/workspace';
import Slider from 'react-slick';
import { Link } from "react-router-dom";

const CustomLink=styled(Link)`
text-decoration: none;
color:black;
`;

const Wrapper = styled.div`
    width:1000px;
`;
const Header = styled.div`
    font-size:18px;
    padding-left:15px;
    font-weight:1000;
    margin-bottom:10px;
`;
const Container = styled.div`
    padding:5px 0;
`;

const CustomSlider = styled(Slider)`
    display:flex;
    align-items:center;
    overflow: hidden;
    .slick-list{
        height:210px;
    }
`;
const WorkspacesSection: FC = () => {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7500,
      pauseOnHover: true,
      arrows:true,
      slide:'div',
    };

    return (
        <Wrapper>
            <Header>Workspaces</Header>
            <Container>
                <CustomSlider {...settings}>
                    <CustomLink to="/client_contact"><SingleWorkspace title={'Client contract'} iconUrl={'../../icons/publications.png'} alt={'publications'}/></CustomLink>
                    <CustomLink to="/supplier_contact"><SingleWorkspace title={'Supplier contract'} iconUrl={'../../icons/people.png'} alt={'people'}/></CustomLink>
                    <CustomLink to="/corporate"><SingleWorkspace title={'Corporate'} iconUrl={'../../icons/entities.png'} alt={'entities'}/></CustomLink>
                    <CustomLink to="/real_estate_contact"><SingleWorkspace title={'Real estate contracts'} iconUrl={'../../icons/comments.png'} alt={'comments'}/></CustomLink>
                    <CustomLink to="/group"><SingleWorkspace title={'Group Norms'} iconUrl={'../../icons/ecosystem.png'} alt={'ecosystem'}/></CustomLink>
                </CustomSlider>
            </Container>
        </Wrapper>
    );
};
export default WorkspacesSection;