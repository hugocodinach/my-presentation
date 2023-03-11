import { useMemo } from 'react';
import styled from 'styled-components';
import Text from '../components/Text/Text';

const HomeContainer = styled.div`
  width: 100%;
  padding: 0px 100px 0px 100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitlesContainer = styled.div`
    width: 700px;
    display: flex;
    flex-direction: column;
`;

const Home = () => {
    const titleStyle = useMemo(() => ({ margin: '40px 0px 40px 0px', lineHeight: 1.2 }), []);

    return (
        <HomeContainer>
            <TitlesContainer>
                <Text color='purple' fontSize='subtitle' isUpperCase isBold>
                    Bonjour Waalaxy 👽
                </Text>
                <Text color='white' fontSize='title' isUpperCase style={titleStyle} isBold>
                    Demande de permission pour entrer dans votre galaxie
                </Text>
                <Text color='grey' fontSize='subBody' isUpperCase>
                    "Identifiant du pilote": "Hugo CODINACH"
                    <br />
                    "Grade du pilote": "EPITECH BAC +5, Expert en Technologies de l'Information"
                    <br />
                    "Sujet": "postulation au poste de développeur full stack en CDI au sein de la walaaxy"
                </Text>
            </TitlesContainer>
        </HomeContainer>
    );
};

export default Home;