export default Iconfilter;
declare function Iconfilter({ size, color, ...rest }: {
    [x: string]: any;
    size: any;
    color: any;
}): JSX.Element;
declare namespace Iconfilter {
    namespace defaultProps {
        const size: number;
    }
}
