import styled from 'styled-components';
import Companies from '../components/HomeScreens/Companies';
import Contact from '../components/HomeScreens/Contact';

import Cover from '../components/HomeScreens/Cover';
import Hobbies from '../components/HomeScreens/Hobbies';
import Languages from '../components/HomeScreens/Languages';
import Sheet from '../components/HomeScreens/Sheet';

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Home = () => {
    return (
        <HomeContainer>
            <Cover />
            <Sheet />
            <Companies />
            <Languages />
            <Hobbies />
            <Contact />
        </HomeContainer>
    );
};

export default Home;