import { ReactNode } from 'react';
import styled from 'styled-components';

import { IColors } from '../../theme/interfaces';

type IconButtonProps = {
    children: ReactNode;
    color?: IColors[keyof IColors];
    style?: (React.CSSProperties & object) | undefined;
    onClick: () => void;
};

const IconContainer = styled.div<IconButtonProps>`
    display: flex;
    align-self: start;
    border-radius: 999px;
    width: 50px;
    height: 50px;
    background-color: ${({ color, theme: { colors } }) => colors[color || 'blue']};
    justify-content: center;
    align-items: center;
    box-shadow: rgb(44, 115, 210) 0px 20px 30px -10px;
    &:hover {
        cursor: pointer;
    }
`;

const IconButton = ({
    children,
    color = 'blue',
    style,
    onClick
}: IconButtonProps) => {
    return (
        <IconContainer style={style} color={color} onClick={onClick}>
            {children}
        </IconContainer>
    );
};

export default IconButton;