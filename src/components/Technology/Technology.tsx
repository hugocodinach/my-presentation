import { useMemo } from 'react';
import styled from 'styled-components';
import sizes from '../../utils/sizes';

import ITechnology from '../HomeScreens/Interfaces/ITechnology';
import Text from '../Text/Text';

const ImageContainer = styled.div`
    display: flex;
    width: 6.25rem;
    height: 6.25rem;
    justify-content: center;
    align-items: center;

    @media (max-width: ${sizes.tablet}px) {
        width: 5.5rem;
        height: 5.5rem;
	}
`;

const Logo = styled.img`
    width: 100%;
    object-fit: contain;
`;

const TechnologyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

type TechnologyProps = {
    technology: ITechnology;
};

const Technology = ({
    technology
}: TechnologyProps) => {
    const technologyTitleStyle = useMemo(() => ({ marginTop: 10 }), []);

    return (
        <TechnologyContainer>
            <ImageContainer title={technology.name}>
                <Logo src={technology.logo} alt='technology logo' />
            </ImageContainer>
            <Text style={technologyTitleStyle}>{technology.name}</Text>
        </TechnologyContainer>
    );
};

export default Technology;