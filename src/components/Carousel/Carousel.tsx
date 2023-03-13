import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { activeIndexState } from '../../states';
import IconButton from '../Button/IconButton';
import Paginator from './Paginator';

const CarouselContainer = styled.div`
    overflow: hidden;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`;

const InnerContainer = styled.div`
    white-space: nowrap;
    transition: transform 0.3s;
`;

const ItemContainer = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const LeftIconContainer = styled.div`
    position: absolute;
    left: 6.25rem;
`;

const LeftIcon = styled(MdChevronLeft)`
    font-size: ${({ theme: { fontSizes } }) => fontSizes.subtitle};
    color ${({ theme: { colors } }) => colors.white};
`

const RightIconContainer = styled.div`
    position: absolute;
    right: 6.25rem;
`;

const RightIcon = styled(MdChevronRight)`
    font-size: ${({ theme: { fontSizes } }) => fontSizes.subtitle};
    color ${({ theme: { colors } }) => colors.white};
`;

type CarouselProps = {
    items: Array<any>;
    renderItem: (company: any) => JSX.Element;
};

const Carousel = ({
    items,
    renderItem
}: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useRecoilState(activeIndexState);

    const handlePrevious = useCallback(() => {
        if (!items?.length)
            return;

        if (activeIndex === 0) {
            setActiveIndex(items?.length - 1);
            return;
        }

        setActiveIndex(activeIndex - 1);
    }, [activeIndex, items?.length]);

    const handleNext = useCallback(() => {
        if (!items?.length)
            return;

        if (activeIndex === items?.length - 1) {
            setActiveIndex(0);
            return;
        }

        setActiveIndex(activeIndex + 1);
    }, [activeIndex, items?.length]);

    const handleClick = useCallback((index: number) => {
        setActiveIndex(index);
    }, []);

    return (
        <>
            <CarouselContainer>
                <InnerContainer style={{ transform: `translate(-${activeIndex * 100}%)`}}>
                    {items.map((item, key) => {
                        return (
                            <ItemContainer key={key}>
                                {renderItem(item)}
                            </ItemContainer>
                        );
                    })}
                </InnerContainer>
                <LeftIconContainer>
                    <IconButton onClick={handlePrevious}>
                        <LeftIcon />
                    </IconButton>
                </LeftIconContainer>
                <RightIconContainer>
                    <IconButton onClick={handleNext}>
                        <RightIcon />
                    </IconButton>
                </RightIconContainer>
            </CarouselContainer>
            <Paginator items={items} activeIndex={activeIndex} onClick={handleClick} />
        </>
    );
};

export default Carousel;