import { useMemo } from 'react';
import styled from 'styled-components';

import Profile from '../../assets/profile.jpg';
import hexToRgb from '../../utils/color';
import Text from '../Text/Text';

import BackgroundImage from '../../assets/background1.png';

const SheetContainer = styled.div`
  padding: 0px 100px 0px 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 200px;
  position: relative;
`;

const ImageContainer = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProfileImage = styled.img`
    width: 100%;
    object-fit: contain;
    box-shadow: ${({ theme: { colors } }) => hexToRgb(colors.blue)} 0px 20px 30px -10px;
`;

const InformationsContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 15%;
    padding-top: 30px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

const BGContainer = styled.div`
    position: absolute;
    width: 100vw;
    top: 20vh;
    left: 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
`;

const Background = styled.img`
    width: 100%;
    object-fit: contain;
`;

const CategoryTitleContainer = styled.div`
    width: 300px;
`;

const Sheet = () => {
    const titleStyle = useMemo(() => ({ marginBottom: 50 }), []);

    return (
        <SheetContainer>
            <BGContainer>
                <Background src={BackgroundImage} alt='background' />
            </BGContainer>
            <ImageContainer>
                <ProfileImage src={Profile} alt='profile picture' />
            </ImageContainer>
            <InformationsContainer>
                <Text fontSize='subtitle' isUpperCase isBold color='purple' style={titleStyle}>Carte du pilote</Text>
                <Row>
                    <CategoryTitleContainer>
                        <Text fontSize='body' isBold>Prénom : </Text>
                    </CategoryTitleContainer>
                    <Text fontSize='body'> Hugo</Text>
                </Row>
                <Row>
                    <CategoryTitleContainer>
                        <Text fontSize='body' isBold>Nom : </Text>
                    </CategoryTitleContainer>
                    <Text fontSize='body'> CODINACH</Text>
                </Row>
                <Row>
                    <CategoryTitleContainer>
                        <Text fontSize='body' isBold>Âge : </Text>
                    </CategoryTitleContainer>
                    <Text fontSize='body'> 23 ans</Text>
                </Row>
                <Row>
                    <CategoryTitleContainer>
                        <Text fontSize='body' isBold>Langues parlées : </Text>
                    </CategoryTitleContainer>
                    <Text fontSize='body'> Français / Anglais</Text>
                </Row>
                <Row>
                    <CategoryTitleContainer>
                        <Text fontSize='body' isBold>Diplôme : </Text>
                    </CategoryTitleContainer>
                    <Text fontSize='body'> Vient de finir ses études à EPITECH (Bac +5)</Text>
                </Row>
                <Row>
                    <CategoryTitleContainer>
                        <Text fontSize='body' isBold>Temps passé en entreprise : </Text>
                    </CategoryTitleContainer>
                    <Text fontSize='body'> Plus de 3 ans</Text>
                </Row>
                <Row>
                    <CategoryTitleContainer>
                        <Text fontSize='body' isBold>Domicile : </Text>
                    </CategoryTitleContainer>
                    <Text fontSize='body'> Port marianne</Text>
                </Row>
            </InformationsContainer>
        </SheetContainer>
    );
};

export default Sheet;