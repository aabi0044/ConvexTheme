import { Component } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist/dist/chartist.component";
//Declarations
declare var require: any;
const data: any = require('../../shared/data/chartist.json');

//Interface
export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}

@Component({
    selector: 'app-chartist',
    templateUrl: './chartist.component.html',
    styleUrls: ['./chartist.component.scss'],
})

export class ChartistComponent {

    // Two Line with Area Chart Starts
    twoLinesArea: Chart = {
        type: 'Line',
        data: data['twoLinesArea'],
        options: {
            low: 0,
            showArea: true,
            fullWidth: true,
            onlyInteger: true,
            axisY: {
                low: 0,
                scaleMinSpace: 50,
            },
            axisX: {
                showGrid: false
            },
            // lineSmooth: Chartist.Interpolation.simple({
            //     divisor: 2
            // }),
        },
        events: {
            draw(data: any): void {
                if (data.type === 'point') {
                    var circle = new Chartist.Svg('circle', {
                        cx: [data.x], cy: [data.y], r: [10],
                    }, 'ct-circle');
                    data.element.replace(circle);
                }
            }

        },
    };
    // Two Lines with Area Chart Ends

    // Line with Area Chart Starts
    lineArea: Chart = {
        type: 'Line',
        data: data['lineArea'],
        options: {
            low: 0,
            showArea: true,
            fullWidth: true,
            onlyInteger: true,
            axisY: {
                low: 0,
                scaleMinSpace: 50,
            },
            axisX: {
                showGrid: false
            },
            // lineSmooth: Chartist.Interpolation.simple({
            //     divisor: 2
            // }),
        },
        events: {
            draw(data: any): void {
                if (data.type === 'point') {
                    var circle = new Chartist.Svg('circle', {
                        cx: [data.x], cy: [data.y], r: [10],
                    }, 'ct-circle');
                    data.element.replace(circle);
                }
            }

        },
    };
    // Line with Area Chart Ends

    // Line with Area Chart 4 Starts
    lineArea4: Chart = {
        type: 'Line',
        data: data['lineArea4'],
        options: {
            // low: 650,
            low: 0,
            showArea: true,
            fullWidth: true,
        },

    };
    // Line with Area Chart 4 Ends

    // Line with Area Chart 5 Starts
    lineArea5: Chart = {
        type: 'Line',
        data: data['lineArea5'],
        options: {
            // low: 650,
            low: 0,
            high: 100,
            showArea: true,
            fullWidth: true,
            onlyInteger: true,
            axisY: {
                low: 0,
                scaleMinSpace: 30,
            },
            axisX: {
                showGrid: false
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 2,
                fillHoles: false
            }),
        },
        events: {
            created(data: any): void {
                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'gradient3',
                    x1: 0,
                    y1: 1,
                    x2: 1,
                    y2: 0
                }).elem('stop', {
                    offset: 0.25,
                    'stop-color': 'rgba(0, 201, 255, 1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(146, 254, 157, 1)'
                });
            },
            draw(data: any): void {
                var circleRadius = 12;
                if (data.type === 'point') {
                    var circle = new Chartist.Svg('circle', {
                        cx: data.x,
                        cy: data.y,
                        r: circleRadius,
                        class: data.value.y === 80 ? 'ct-point-circle' : 'ct-point-circle-transperent'
                    });
                    data.element.replace(circle);
                }

            }

        },

    };
    // Line with Area Chart 5 Ends



    // Line Chart Starts
    lineChart: Chart = {
        type: 'Line',
        data: data['line'],
        options: {
            low: 0,
            fullWidth: true,
            onlyInteger: true,
            
            axisY: {
                low: 0,
                scaleMinSpace: 60,
                labelInterpolationFnc: function labelInterpolationFnc(value) {
                    return value / 1000 + 'K';
                },
            },
            axisX: {
                showGrid: false
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 2
            }),
        },
        events: {
            created(data: any): void {
                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'linear',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(0, 201, 255,1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(17,228,183, 1)'
                });
            },
            draw(data: any): void {
                if (data.type === 'point') {
                    // var circle = new Chartist.Svg('circle', {
                    //     cx: [data.x], cy: [data.y], r: [10],
                    // }, 'ct-circle');
                    // data.element.replace(circle);
                    var circle = new Chartist.Svg('circle', {
                        cx: data.x,
                        cy: data.y,
                        r: [10],
                        class: data.value.y === 0 || data.value.y === 6800 ? 'ct-circle-transperent' :  'ct-circle'
                    });
                    data.element.replace(circle);
                }
            }

        },
    };
    // Line Chart Ends

    // Line Chart 3 Starts
    lineChart3: Chart = {
        type: 'Line', data: data['Line3'], options: {
            axisX: { showGrid: false }, axisY: {
                scaleMinSpace: 30,
            }, fullWidth: true,
            chartPadding: { top: 0, right: 50, bottom: 0, left: 0 },
        },
        responsiveOptions: [
            ['screen and (max-width: 640px) and (min-width: 381px)', {
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 2 === 0 ? value : null;
                    }
                }
            }],
            ['screen and (max-width: 380px)', {
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 3 === 0 ? value : null;
                    }
                }
            }]
        ],
    };
    // Line Chart 3 Ends

    
    // Scatter Line Chart Starts
    scatterlineChart: Chart = {
        type: 'Line', data: data['ScatterLine'], options: {
            axisX: { showGrid: false }, axisY: {
                scaleMinSpace: 30,
            }, fullWidth: true,
        },
        responsiveOptions: [
            ['screen and (max-width: 640px) and (min-width: 381px)', {
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 2 === 0 ? value : null;
                    }
                }
            }],
            ['screen and (max-width: 380px)', {
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 3 === 0 ? value : null;
                    }
                }
            }]
        ],
    };
    // Scatter Line Chart Ends

    // Scatter Chart Starts
    scatterChart: Chart = {
        type: 'Line',
        data: data['Scatter'],
        options: {
            showLine: false,
            axisX: {
                labelInterpolationFnc: function (value: number, index: number): string {
                    return index % 13 === 0 ? `W${value}` : null;
                },
                showGrid: false
            },
            axisY: {
                scaleMinSpace: 30,
            }
        },
        responsiveOptions: [
            [
                'screen and (min-width: 640px)',
                {
                    axisX: {
                        labelInterpolationFnc: function (value: number, index: number): string {
                            return index % 4 === 0 ? `W${value}` : null;
                        }
                    }
                }
            ]
        ]
    };
    // Scatter Chart Ends

    // Bi-polar Line Chart Starts
    biPolarLineChart: Chart = {
        type: 'Line',
        data: data['Bi-PolarLine'],
        options: {
            high: 3,
            low: -3,
            showArea: true,
            showLine: false,
            showPoint: false,
            fullWidth: true,
            axisX: {
                showGrid: false,
                offset: 100,
                labelInterpolationFnc: function (value: number, index: number): number {
                    return index % 2 === 0 ? value : null;
                }
            },
            axisY: {
                scaleMinSpace: 30,
            }
        }
    };
    // Bi-polar Line Chart Ends

    // Bar Chart Starts
    barChart: Chart = {
        type: 'Bar',
        data: data['Bar'],
        options: {
            seriesBarDistance: 21,
            axisX: {
                showGrid: false, offset: 100
            },
            axisY: {
                scaleMinSpace: 30,
            }
        },
    };
    // Bar Chart Ends

    // Distributed Series Bar Chart Starts
    distributedSeriesBarChart: Chart = {
        type: 'Bar',
        data: data['DistributedSeries'],
        options: {
            showGrid: false,
            distributeSeries: true,
            axisY: {
                scaleMinSpace: 30,
            }
        },
    };
    // Distributed Series Bar Chart Ends

    // Donut Chart 1 Starts
    donutChart1: Chart = {
        type: 'Pie',
        data: data['donut'],
        options: {
            donut: true,
            donutWidth: 60,
            startAngle: 270,
            total: 200,
            showLabel: true,
        },
    };
    // Donut Chart 1 Ends

    // Donut Chart 2 Starts
    donutChart2: Chart = {
        type: 'Pie',
        data: data['donut'],
        options: {
            donut: true,
            showLabel: true,
            labelDirection: 'implode',

        },
    };
    // Donut Chart 2 Ends
}