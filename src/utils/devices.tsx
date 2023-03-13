import sizes from "./sizes";

const devices = {
    mobileS: `(min-width: ${sizes.mobileS}px)`,
    mobileM: `(min-width: ${sizes.mobileM}px)`,
    mobileL: `(min-width: ${sizes.mobileL}px)`,
    tablet: `(min-width: ${sizes.tablet}px)`,
    laptop: `(min-width: ${sizes.laptop}px)`,
    laptopL: `(min-width: ${sizes.laptopL}px)`,
    desktop: `(min-width: ${sizes.desktop}px)`
};

export default devices;