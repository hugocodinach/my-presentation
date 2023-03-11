import { useMemo } from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';

const LanguagesContainer = styled.div`
    padding: 0px 100px 0px 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
`;

const TitleContainer = styled.div`

`;

const Languages = () => {
    const titleStyle = useMemo(() => ({ margin: '40px 0px 40px 0px', lineHeight: 1.2 }), []);

    return (
        <LanguagesContainer>
            <TitleContainer>
                <Text fontSize='title' isBold isUpperCase>Langages pratiqués</Text>
            </TitleContainer>
        </LanguagesContainer>
    );
};

export default Languages;