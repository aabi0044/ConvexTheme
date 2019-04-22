import { Component } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist/dist/chartist.component";

declare var require: any;

const data: any = require('../../shared/data/chartist.json');

export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}

@Component({
    selector: 'app-eCommerce',
    templateUrl: './eCommerce.component.html',
    styleUrls: ['./eCommerce.component.scss']
})

export class EcommerceComponent {

 // Line Chart Starts
 lineChart: Chart = {
    type: 'Line',
    data: data['line'],
    options: {
        low: 0,
        fullWidth: true,
        onlyInteger: true,
        chartPadding: {
            right: 20
        },
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
                id: 'linear1',
                x1: 1,
                y1: 0,
                x2: 0,
                y2: 0
            }).elem('stop', {
                offset: 0,
                'stop-color': 'rgba(185,168,231, 1)'
            }).parent().elem('stop', {
                offset: 1,
                'stop-color': 'rgba(118,74,233, 1)'
            });
        },
        draw(data: any): void {
            if (data.type === 'point') {
               
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

    // Stacked Bar chart configuration Starts
    Stackbarchart: Chart = {
        type: 'Bar',
        data: data['Stackbarchart'],
        options: {
            fullWidth: true,
            axisX: {
                showGrid: false,
            },
            axisY: {
                showGrid: true,
                showLabel: false,
                offset: 0
            },
            chartPadding: 30
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
                if (data.type === 'bar') {
                    data.element.attr({
                        style: 'stroke-width: 5px',
                        x1: data.x1 + 0.001
                    });

                    data.group.append(new Chartist.Svg('circle', {
                        cx: data.x2,
                        cy: data.y2,
                        r: 5
                    }, 'ct-slice-bar'));

                }
                else if (data.type === 'label') {
                    data.element.attr({
                        y: 270
                    })
                }
            }
        },
    };
    // Stacked Bar chart configuration Ends


    // Donut chart configuration Starts
    DonutChart: Chart = {
        type: 'Pie',
        data: data['donutDashboard'],
        options: {
            donut: true,
            startAngle: 310,
            donutSolid: true,
            donutWidth: 30,
            labelInterpolationFnc: function (value) {
                var total = data['donutDashboard'].series.reduce(function (prev, series) {
                    return prev + series.value;
                }, 0);
                return total + '%';
            }
        },
        events: {
            created(data: any): void {
                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'donutGradient1',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(155, 60, 183,1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(255, 57, 111, 1)'
                });
                defs.elem('linearGradient', {
                    id: 'donutGradient2',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(0, 75, 145,0.8)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(120, 204, 55, 0.8)'
                });

                defs.elem('linearGradient', {
                    id: 'donutGradient3',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(132, 60, 247,1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(56, 184, 242, 1)'
                });

            },
            draw(data: any): void {
                if (data.type === 'label') {
                    if (data.index === 0) {
                        data.element.attr({
                            dx: data.element.root().width() / 2,
                            dy: data.element.root().height() / 2
                        });
                    } else {
                        data.element.remove();
                    }
                }

            }
        }
    };
    // Donut chart configuration Ends

    //  Bar chart configuration Starts
    BarChart: Chart = {
        type: 'Bar', data: data['DashboardBar'], options: {
            axisX: {
                showGrid: false,
            },
            axisY: {
                showGrid: false,
                showLabel: false,
                offset: 0
            },
            low: 0,
            high: 60,
        },
        responsiveOptions: [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ],
        events: {
            created(data: any): void {
                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'gradient4',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(238, 9, 121,1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(255, 106, 0, 1)'
                });
                defs.elem('linearGradient', {
                    id: 'gradient5',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(0, 75, 145,1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(120, 204, 55, 1)'
                });

                defs.elem('linearGradient', {
                    id: 'gradient6',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(132, 60, 247,1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(56, 184, 242, 1)'
                });

                defs.elem('linearGradient', {
                    id: 'gradient7',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(155, 60, 183,1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(255, 57, 111, 1)'
                });

                defs.elem('linearGradient', {
                    id: 'gradient8',
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
                var barHorizontalCenter, barVerticalCenter, label, value;
                if (data.type === 'bar') {
                    data.element.attr({
                        y1: 195,
                        x1: data.x1 + 0.001
                    });

                    data.group.append(new Chartist.Svg('circle', {
                        cx: data.x2,
                        cy: data.y2,
                        r: 12
                    }, 'ct-slice-bar'));

                }

            }
        },

    };
    // Bar chart configuration Ends

    // Widget Area chart 1 configuration Starts
    WidgetAreaChart1: Chart = {
        type: 'Line', data: data['WidgetAreaChart'],

        options: {
            axisX: {
                showGrid: false,
                showLabel: false,
                offset: 0,
            },
            axisY: {
                showGrid: false,
                low: 0,
                showLabel: false,
                offset: 0,
                scaleMinSpace: 10,
            },

            lineSmooth: Chartist.Interpolation.simple({
                divisor: 2
            }),
            fullWidth: true,
            showArea: true,
            onlyInteger: true,
            targetLine: {
                value: 30,
                class: 'ct-target-line'
            }
        },
        events: {
            created(data: any): void {
                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'wGradient1',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(130,73,232, 1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(41,123,249, 1)'
                });

                const targetLineX = data.chartRect.x1 + (data.chartRect.width() - (data.chartRect.width() / data.bounds.step))

                data.svg.elem('line', {
                    x1: targetLineX,
                    x2: targetLineX,
                    y1: data.chartRect.y1,
                    y2: data.chartRect.y2
                }, data.options.targetLine.class);
               
            },
            draw(data: any): void {
                var circleRadius = 10;
                if (data.type === 'point') {
                    var circle = new Chartist.Svg('circle', {
                        cx: data.x,
                        cy: data.y,
                        r: circleRadius,
                        class: data.value.y === 30 ? 'ct-point-circle' : 'ct-point-circle-transperent'
                    });
                    data.element.replace(circle);
                }
            }

        },



    };
    // Widget Area chart 1 configuration Ends

    // Widget Area chart 2 configuration Starts
    WidgetAreaChart2: Chart = {
        type: 'Line', data: data['WidgetAreaChart'],

        options: {
            axisX: {
                showGrid: false,
                showLabel: false,
                offset: 0,
            },
            axisY: {
                showGrid: false,
                low: 0,
                showLabel: false,
                offset: 0,
                scaleMinSpace: 10,
            },

            lineSmooth: Chartist.Interpolation.simple({
                divisor: 2
            }),
            fullWidth: true,
            showArea: true,
            onlyInteger: true,
            targetLine: {
                value: 30,
                class: 'ct-target-line'
            }
        },
        events: {
            created(data: any): void {
                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'wGradient2',
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(252,157,48, 1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(250,91,76, 1)'
                });

                const targetLineX = data.chartRect.x1 + (data.chartRect.width() - (data.chartRect.width() / data.bounds.step))

                data.svg.elem('line', {
                    x1: targetLineX,
                    x2: targetLineX,
                    y1: data.chartRect.y1,
                    y2: data.chartRect.y2
                }, data.options.targetLine.class);
                
            },
            draw(data: any): void {
                var circleRadius = 10;
                if (data.type === 'point') {
                    var circle = new Chartist.Svg('circle', {
                        cx: data.x,
                        cy: data.y,
                        r: circleRadius,
                        class: data.value.y === 30 ? 'ct-point-circle' : 'ct-point-circle-transperent'
                    });
                    data.element.replace(circle);
                }
            }

        },



    };
    // Widget Area chart 2 configuration Ends

    // Widget Area chart 3 configuration Starts
    WidgetAreaChart3: Chart = {
        type: 'Line', data: data['WidgetAreaChart'],

        options: {
            axisX: {
                showGrid: false,
                showLabel: false,
                offset: 0,
            },
            axisY: {
                showGrid: false,
                low: 0,
                showLabel: false,
                offset: 0,
                scaleMinSpace: 10,
            },

            lineSmooth: Chartist.Interpolation.simple({
                divisor: 2
            }),
            fullWidth: true,
            showArea: true,
            onlyInteger: true,
            targetLine: {
                value: 30,
                class: 'ct-target-line'
            }
        },
        events: {
            created(data: any): void {
                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'wGradient3',
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(120, 204, 55, 1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(0, 75, 145, 1)'
                });

                const targetLineX = data.chartRect.x1 + (data.chartRect.width() - (data.chartRect.width() / data.bounds.step))

                data.svg.elem('line', {
                    x1: targetLineX,
                    x2: targetLineX,
                    y1: data.chartRect.y1,
                    y2: data.chartRect.y2
                }, data.options.targetLine.class);
               
            },
            draw(data: any): void {
                var circleRadius = 10;
                if (data.type === 'point') {
                    var circle = new Chartist.Svg('circle', {
                        cx: data.x,
                        cy: data.y,
                        r: circleRadius,
                        class: data.value.y === 30 ? 'ct-point-circle' : 'ct-point-circle-transperent'
                    });
                    data.element.replace(circle);
                }
            }

        },



    };
    // Widget Area chart 3 configuration Ends


}
