export default IcontabMy;
declare function IcontabMy({ size, color, ...rest }: {
    [x: string]: any;
    size: any;
    color: any;
}): JSX.Element;
declare namespace IcontabMy {
    namespace defaultProps {
        const size: number;
    }
}
