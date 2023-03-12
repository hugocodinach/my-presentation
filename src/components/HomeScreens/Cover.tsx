import { useMemo } from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';

import Illustration from '../../assets/HomePicture.png';
import StarImage from '../../assets/star1.png';

const Container = styled.div`
    width: 100vw;
    overflow-x: hidden;
    position: relative;
`;

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

const ImageContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    z-index: -1;
`;

const Image = styled.img`
    width: 60%;
    object-fit: contain;
`;

const StarContainer = styled.div`
    position: absolute;
    width: 10rem;
    height: 10rem;
    top: 5rem;
    left: -5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
`;

const BottomStarContainer = styled.div`
    position: absolute;
    width: 15rem;
    height: 15rem;
    top: 90vh;
    right: -10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
`;

const Star = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const Cover = () => {
    const titleStyle = useMemo(() => ({ margin: '40px 0px 40px 0px', lineHeight: 1.2 }), []);

    return (
        <Container>
            <ImageContainer>
                <Image src={Illustration} alt='illustration' />
            </ImageContainer>
            <StarContainer>
                <Star src={StarImage} alt='star' />
            </StarContainer>
            <BottomStarContainer>
                <Star src={StarImage} alt='star' />
            </BottomStarContainer>
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
        </Container>
    );
};

export default Cover;