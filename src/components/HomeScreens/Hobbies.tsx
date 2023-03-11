import styled from 'styled-components';
import { useMemo } from 'react';

import IHobby from '../Hobby/Interfaces/IHobby';
import Hobby from '../Hobby/Hobby';
import Text from '../Text/Text';

import CinemaImg from '../../assets/cinema.png';
import MusicImg from '../../assets/music.png';
import DrawImg from '../../assets/draw.png';

const HobbiesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 100px;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4rem;
`;

const Hobbies = () => {
    const colors: string[] = useMemo(() => ['blue', 'purple', 'green'], []);
    const hobbies: IHobby[] = useMemo(() => [
        {
            title: 'Cinéma',
            logo: CinemaImg,
            listTitle: 'Films préférés',
            listItems: [
                'Drive',
                'Le parrain 1',
                'Interstellar'
            ]
        },
        {
            title: 'Musique',
            logo: MusicImg,
            listTitle: 'Artistes phares',
            listItems: [
                'Hugo TSR',
                'Laylow',
                'Nirvana'
            ]
        },
        {
            title: 'Dessin',
            logo: DrawImg,
            listTitle: 'Outils utilisés',
            listItems: [
                'Feutre à alcool',
                'Procreate',
                'Illustrator'
            ]
        }
    ], []);

    return (
        <HobbiesContainer>
            <Text fontSize='title' isBold isUpperCase>Passions</Text>
            <CardsContainer>
                {hobbies.map((hobby, key) => (
                    <Hobby key={key} hobby={hobby} color={colors[key]}/>
                ))}
            </CardsContainer>
        </HobbiesContainer>
    );
};

export default Hobbies;