export default IcontabMsg;
declare function IcontabMsg({ size, color, ...rest }: {
    [x: string]: any;
    size: any;
    color: any;
}): JSX.Element;
declare namespace IcontabMsg {
    namespace defaultProps {
        const size: number;
    }
}
