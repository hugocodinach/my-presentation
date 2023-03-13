import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { windowDimensionsState } from '../states/window';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useRecoilState(windowDimensionsState);

    useEffect(() => {
        setWindowDimensions(getWindowDimensions());

        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
