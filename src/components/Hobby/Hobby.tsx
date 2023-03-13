import styled from 'styled-components';

import { IColors } from '../../theme/interfaces';
import hexToRgb from '../../utils/color';
import Text from '../Text/Text';
import IHobby from './Interfaces/IHobby';

type HobbyCardContentProps = {
    color: IColors[keyof IColors];
}

const HobbyCard = styled.div`
    display: flex;
    width: 18rem;
    aspect-ratio: 0.6;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    position: relative;
    transition: transform 0.3s;
    &:hover {
        transform: translateY(-2%);
    }
`;

const HobbyCardContent = styled.div<HobbyCardContentProps>`
    display: flex;
    width: 100%;
    height: 80%;
    margin-top: 20%;
    border-radius: 20px;
    flex-direction: column;
    border: 1px solid ${({ color, theme: { colors } }) => colors[color]};
    box-shadow: ${({ color, theme: { colors } }) => hexToRgb(colors[color])} 0px 20px 30px -10px;
`;

const ImageContainer = styled.div`
    position: absolute;
    display: flex;
    height: 20%;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    height: 100%;
    object-fit: contain;
`;

const HobbyTitle = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
`;

const HobbyTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20%;
`;

const HobbyBody = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 1rem 1rem 1rem;
    gap: 5px;
`;

type HobbyProps = {
    hobby: IHobby;
    color: IColors[keyof IColors];
};

const Hobby = ({
    hobby,
    color
}: HobbyProps) => {
    return (
        <HobbyCard>
            <ImageContainer>
                <Logo src={hobby.logo} alt={hobby.title} />
            </ImageContainer>
            <HobbyCardContent color={color}>
                <HobbyTextContainer>
                    <HobbyTitle>
                        <Text fontSize='subtitle' color={color} isUpperCase isBold>{hobby.title}</Text>
                    </HobbyTitle>
                    <HobbyBody>
                        <Text color='grey'>{hobby.listTitle} :</Text>
                        {hobby.listItems.map((item, key) => (
                            <Text key={key} color='grey'>• {item}</Text>
                        ))}
                    </HobbyBody>
                </HobbyTextContainer>
            </HobbyCardContent>
        </HobbyCard>
    );
};

export default Hobby;