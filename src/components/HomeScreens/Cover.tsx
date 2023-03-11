import { useMemo } from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';

const CoverContainer = styled.div`
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

const Cover = () => {
    const titleStyle = useMemo(() => ({ margin: '40px 0px 40px 0px', lineHeight: 1.2 }), []);

    return (
        <CoverContainer>
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
                    "Sujet": "postulation au poste de <Text isUpperCase color='blue' fontSize='subBody'>développeur full stack</Text> en CDI au sein de la walaaxy"
                </Text>
            </TitlesContainer>
        </CoverContainer>
    );
};

export default Cover;