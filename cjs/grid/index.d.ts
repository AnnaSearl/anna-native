import React from 'react';
export interface GridProps {
    data?: any[];
    columns?: number;
    gutter?: number | [number, number?];
    span?: number | number[];
    border?: string;
    children?: (o: any, index?: number, colIndex?: number, rowIndex?: number) => any | React.ReactNode;
}
declare const Grid: React.FC<GridProps>;
export default Grid;
