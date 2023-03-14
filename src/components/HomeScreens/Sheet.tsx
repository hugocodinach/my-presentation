import { useMemo } from 'react';
import styled from 'styled-components';

import Profile from '../../assets/profile.jpg';
import hexToRgb from '../../utils/color';
import Text from '../Text/Text';

import sizes from '../../utils/sizes';

const SheetContainer = styled.div`
    padding: 0px 6.25rem 0px 6.25rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 200px;
    position: relative;

	@media (max-width: ${sizes.tablet}px) {
        flex-direction: column;
        gap: 5vh;
        padding: 0px;
	}
`;

const ImageContainer = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${sizes.tablet}px) {
        width: 60%;
        margin-left: 20%;
        margin-right: 20%;
	}
`;

const ProfileImage = styled.img`
    width: 100%;
    object-fit: contain;
    box-shadow: ${({ theme: { colors } }) => hexToRgb(colors.blue)} 0px 20px 30px -10px;
`;

const InformationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    width: 45%;

    @media (max-width: ${sizes.tablet}px) {
        width: 80%;
        margin-left: 10%;
	}
`;

const WrapRow = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4rem;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const Sheet = () => {
    const titleStyle = useMemo(() => ({ marginBottom: '3rem' }), []);

    return (
        <SheetContainer>
            <ImageContainer>
                <ProfileImage src={Profile} alt='profile picture' />
            </ImageContainer>
            <InformationsContainer>
                <Text fontSize='title' isUpperCase isBold style={titleStyle}>Carte du pilote</Text>
                <WrapRow>
                    <Column>
                        <Text fontSize='body' isUpperCase>Prénom : </Text>
                        <Text fontSize='subtitle' color='purple' isBold> Hugo</Text>
                    </Column>
                    <Column>
                        <Text fontSize='body' isUpperCase>Nom : </Text>
                        <Text fontSize='subtitle' color='purple' isBold> CODINACH</Text>
                    </Column>
                    <Column>
                        <Text fontSize='body' isUpperCase>Âge : </Text>
                        <Text fontSize='subtitle' color='purple' isBold> 23 ans</Text>
                    </Column>
                    <Column>
                        <Text fontSize='body' isUpperCase>Langues parlées : </Text>
                        <Text fontSize='subtitle' color='purple' isBold> Français / Anglais</Text>
                    </Column>
                    <Column>
                        <Text fontSize='body' isUpperCase>Diplôme : </Text>
                        <Text fontSize='subtitle' color='purple' isBold> Vient de finir ses études à EPITECH (Bac +5)</Text>
                    </Column>
                    <Column>
                        <Text fontSize='body' isUpperCase>Temps passé en entreprise : </Text>
                        <Text fontSize='subtitle' color='purple' isBold> Plus de 3 ans</Text>
                    </Column>
                    <Column>
                        <Text fontSize='body' isUpperCase>Domicile : </Text>
                        <Text fontSize='subtitle' color='purple' isBold> Port marianne</Text>
                    </Column>
                </WrapRow>
            </InformationsContainer>
        </SheetContainer>
    );
};

export default Sheet;