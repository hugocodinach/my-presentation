import { useCallback } from 'react';
import styled from 'styled-components';

import PhoneImg from '../../assets/phone.png';
import GithubImg from '../../assets/github.png';
import MailImg from '../../assets/mail.png';
import Text from '../Text/Text';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6.25rem;
`;

const ContactContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 3rem;
`;

const Column = styled.div`
    width: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ImageContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    width: 100%;
    object-fit: contain;
`;

const TextContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
    text-align: center;
`

const TextLinkContainer = styled(TextContainer)`
    cursor: pointer;
`;

const Contact = () => {
    const handleOpenGH = useCallback(() => {
        window.open('https://github.com/hugocodinach/my-presentation', '_blank', 'noreferrer');
    }, []);

    return (
        <Container>
            <Text fontSize='title' isBold isUpperCase>Contacts</Text>
            <ContactContainer>
                <Column>
                    <ImageContainer>
                        <Logo src={PhoneImg} alt={'test'} />
                    </ImageContainer>
                    <TextContainer>
                        <Text>
                            Vous pouvez me joindre au <Text color='blue' isBold>0622525323</Text>
                        </Text>
                    </TextContainer>
                </Column>
                <Column>
                    <ImageContainer>
                        <Logo src={GithubImg} alt={'test'} />
                    </ImageContainer>
                    <TextLinkContainer onClick={handleOpenGH}>
                        <Text>
                            Vous pouvez découvrir le code de ce site en cliquant <Text color='purple' isBold>ici</Text>
                        </Text>
                    </TextLinkContainer>
                </Column>
                <Column>
                    <ImageContainer>
                        <Logo src={MailImg} alt={'test'} />
                    </ImageContainer>
                    <TextContainer>
                        <Text>
                            Vous pouvez m'envoyer un mail à <Text color='green' isBold>hugo.codinach.pro@gmail.com</Text>
                        </Text>
                    </TextContainer>
                </Column>
            </ContactContainer>
        </Container>
    );
};

export default Contact;