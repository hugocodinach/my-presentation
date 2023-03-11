import { ReactNode } from 'react';
import styled from 'styled-components';

import { IColors, IFontSizes } from '../../theme/interfaces';

type TextProps = {
    children: ReactNode;
    color?: IColors[keyof IColors];
    fontSize?: IFontSizes[keyof IFontSizes];
    isUpperCase?: boolean;
    isBold?: boolean;
    style?: (React.CSSProperties & object) | undefined;
};

const TextContainer = styled.span<TextProps>`
    color: ${({ color, theme: { colors } }) => colors[color || 'white']};
    font-size: ${({ fontSize, theme: { fontSizes } }) => fontSizes[fontSize || 'body']};
    text-transform: ${({ isUpperCase }) => isUpperCase ? 'uppercase' : 'none'};
    font-weight: ${({ isBold }) => isBold ? 'bold' : 'normal'};
`;

const Text = ({
    children,
    color = 'white',
    fontSize = 'body',
    isUpperCase = false,
    isBold = false,
    style
}: TextProps) => {
    return (
        <TextContainer fontSize={fontSize} color={color} isUpperCase={isUpperCase} isBold={isBold} style={style}>
            {children}
        </TextContainer>
    );
};

export default Text;