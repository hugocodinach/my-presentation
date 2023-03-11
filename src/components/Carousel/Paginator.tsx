import styled from 'styled-components';

type PaginatorButtonProps = {
    isActive: boolean;
}

const PaginatorContainer = styled.div`
    margin-top: 50px;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const PaginatorButton = styled.div<PaginatorButtonProps>`
    width: 10px;
    height: 10px;
    border-radius: 10px;
    border: 1px solid ${({ theme: { colors } }) => colors.grey};
    background-color: ${({ isActive, theme: { colors } }) => isActive ? colors.blue : 'transparent'};
    cursor: pointer;
`;

type PaginatorProps = {
    items: Array<any>;
    activeIndex: number;
    onClick: (index: number) => void;
};

const Paginator = ({
    items,
    activeIndex,
    onClick
}: PaginatorProps) => {
    return (
        <PaginatorContainer>
            {items.map((_, key) => (
                <PaginatorButton onClick={() => onClick(key)} isActive={activeIndex === key} key={key} />
            ))}
        </PaginatorContainer>
    );
};

export default Paginator;