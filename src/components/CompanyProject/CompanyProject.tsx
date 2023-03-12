import { useMemo } from 'react';
import styled from 'styled-components';
import hexToRgb from '../../utils/color';
import ICompanyProject from '../HomeScreens/Interfaces/ICompanyProject';
import Technology from '../Technology/Technology';
import Text from '../Text/Text';

const CompanyProjectContainer = styled.div`
    width: 1000px;
    height: 600px;
    border: 1px solid ${({ theme: { colors } }) => colors.blue};
    box-shadow: ${({ theme: { colors } }) => hexToRgb(colors.blue)} 0px 20px 30px -10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 50px;
    white-space: normal;
    backdrop-filter: blur(15px);
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
    margin-top: 50px;
`;

const ImageContainer = styled.div`
    display: flex;
    width: 100px;
    height: 100px;
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