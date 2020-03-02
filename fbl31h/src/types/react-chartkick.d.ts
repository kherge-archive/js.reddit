declare module 'react-chartkick' {
    import { Component } from 'react';

    export type DataType = {
        data: {
            [key: string]: number
        },
        name: string
    };

    type ChartComponentProps = {
        data: DataType[],
        id?: string,
        height?: string,
        lineHeight?: string,
        width?: string,
        textAlign?: string,
        color?: string,
        fontSize?: string,
        fontFamily?: string,
        round?: number,
        legend?: boolean,
        thousands?: string
    };

    export class ChartComponent extends Component<ChartComponentProps> {}
    export class LineChart extends ChartComponent {}
}