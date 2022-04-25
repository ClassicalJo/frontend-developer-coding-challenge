interface isSize {
    desktop: boolean;
    tablet: boolean;
    mobile: boolean;
}
interface Breakpoints {
    largerOrEqualTo: isSize;
    smallerThan: isSize;
}


export default function useBreakpoints(): Breakpoints {
    let { innerWidth } = window
    let breakpoints: Breakpoints = {
        largerOrEqualTo: {
            desktop: innerWidth >= 1920,
            tablet: innerWidth >= 1024,
            mobile: innerWidth >= 375
        },
        smallerThan: {
            desktop: innerWidth < 1920,
            tablet: innerWidth < 1024,
            mobile: innerWidth < 375
        }
    }
    return breakpoints
}