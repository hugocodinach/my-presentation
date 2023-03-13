import { useMemo } from 'react';
import styled from 'styled-components';
import hexToRgb from '../../utils/color';
import sizes from '../../utils/sizes';
import ICompanyProject from '../HomeScreens/Interfaces/ICompanyProject';
import Technology from '../Technology/Technology';
import Text from '../Text/Text';

const CompanyProjectContainer = styled.div`
    width: 62.5rem;
    height: 37.5rem;
    border: 1px solid ${({ theme: { colors } }) => colors.blue};
    box-shadow: ${({ theme: { colors } }) => hexToRgb(colors.blue)} 0px 20px 30px -10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 3rem;
    white-space: normal;
    backdrop-filter: blur(15px);
    max-width: 80%;

    @media (max-width: ${sizes.tablet}px) {
        height: 40rem;
	}
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const Section = styled(Column)`
    margin-top: 3rem;
`;

const ImageContainer = styled.div`
    display: flex;
    width: 6.25rem;
    height: 6.25rem;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    width: 100%;
    object-fit: contain;
`;

const WrapRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    gap: 5rem;

    @media (max-width: ${sizes.tablet}px) {
        gap: 1rem;
	}
`;

type CompanyProjectProps = {
    project: ICompanyProject;
};

const CompanyProject = ({
    project
}: CompanyProjectProps) => {
    const { name, company, logo, description, technologies } = project;

    const titleStyle = useMemo(() => ({ marginBottom: 10 }), []);

    return (
        <CompanyProjectContainer>
            <Header>
                <Column>
                    <Text fontSize='title' isUpperCase isBold color='purple'>{name}</Text>
                    <Text fontSize='subtitle' isUpperCase isBold color='white'>Entreprise: {company}</Text>
                </Column>
                {logo ?
                    <ImageContainer>
                        <Logo src={logo} alt='company logo' />
                    </ImageContainer>
                    :
                    null
                }
            </Header>
            <Section>
                <Text style={titleStyle} color='grey' isUpperCase>Projet réalisé</Text>
                {description.split('\n').map((str, key) => <Text key={key}>{str}</Text>)}
            </Section>
            <Section>
                <Text style={titleStyle} color='grey' isUpperCase>Technologies</Text>
                <WrapRow>
                    {technologies.map((technology, key) => (
                        <Technology technology={technology} key={key} />
                    ))}
                </WrapRow>
            </Section>
        </CompanyProjectContainer>
    );
};

export default CompanyProject;