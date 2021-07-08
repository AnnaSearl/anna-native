export default Iconselect;
declare function Iconselect({ size, color, ...rest }: {
    [x: string]: any;
    size: any;
    color: any;
}): JSX.Element;
declare namespace Iconselect {
    namespace defaultProps {
        const size: number;
    }
}
