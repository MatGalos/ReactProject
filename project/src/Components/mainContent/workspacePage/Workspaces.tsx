import React, { FC } from 'react';
import styled from 'styled-components';
import SingleWorkspace from './workspaceModules/workspace';
import Slider from 'react-slick';



const Wrapper = styled.div`
    width:900px;
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
    width:100%;
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
                    <SingleWorkspace title={'Client contract'} iconUrl={'../../icons/publications.png'} alt={'publications'}/>
                    <SingleWorkspace title={'Supplier contract'} iconUrl={'../../icons/people.png'} alt={'people'}/>
                    <SingleWorkspace title={'Corporate'} iconUrl={'../../icons/entities.png'} alt={'entities'}/>
                    <SingleWorkspace title={'Real estate contracts'} iconUrl={'../../icons/comments.png'} alt={'comments'}/>
                    <SingleWorkspace title={'Group Norms'} iconUrl={'../../icons/ecosystem.png'} alt={'ecosystem'}/>
                </CustomSlider>
            </Container>
        </Wrapper>
    );
};
export default WorkspacesSection;