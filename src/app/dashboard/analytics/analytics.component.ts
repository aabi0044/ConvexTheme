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
    selector: 'app-analytics',
    templateUrl: './analytics.component.html',
    styleUrls: ['./analytics.component.scss']
})

export class AnalyticsComponent {

    
    // Widget Area chart 4 configuration Starts
    WidgetAreaChart4: Chart = {

        type: 'Line', data: data['WidgetAreaChart2'],
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
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 2
            }),
            fullWidth: true,
            showArea: true,
            onlyInteger: true
        },
        events: {
            created(data: any): void {
                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'wGradient4',
                    x1: 1,
                    y1: 0,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(250,81,61, 0.8)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(250,55,79, 0.8)'
                });


            },
            draw(data: any): void {
                var circleRadius = 7;
                if (data.type === 'point') {
                    var circle = new Chartist.Svg('circle', {
                        cx: data.x,
                        cy: data.y,
                        r: circleRadius,
                        class: data.value.y === 3 || data.value.y === 45 ? 'ct-point-circle-transperent' : 'ct-point-circle'
                    });
                    data.element.replace(circle);
                }
            }

        },



    };
    // Widget Area chart 4 configuration Ends

    // Widget Area chart 5 configuration Starts
    WidgetAreaChart5: Chart = {

        type: 'Line', data: data['WidgetAreaChart2'],
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
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 2
            }),
            fullWidth: true,
            showArea: true,
            onlyInteger: true
        },
        events: {
            created(data: any): void {
                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'wGradient5',
                    x1: 1,
                    y1: 0,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(255, 0, 204, 0.5)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(51, 51, 153, 1)'
                });


            },
            draw(data: any): void {
                var circleRadius = 7;
                if (data.type === 'point') {
                    var circle = new Chartist.Svg('circle', {
                        cx: data.x,
                        cy: data.y,
                        r: circleRadius,
                        class: data.value.y === 3 || data.value.y === 45 ? 'ct-point-circle-transperent' : 'ct-point-circle'
                    });
                    data.element.replace(circle);
                }
            }

        },



    };
    // Widget Area chart 5 configuration Ends

    // Widget Area chart 6 configuration Starts
    WidgetAreaChart6: Chart = {

        type: 'Line', data: data['WidgetAreaChart2'],
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
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 2
            }),
            fullWidth: true,
            showArea: true,
            onlyInteger: true
        },
        events: {
            created(data: any): void {
                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'wGradient6',
                    x1: 1,
                    y1: 0,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(56, 184, 242, 1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(132, 60, 247, 1)'
                });


            },
            draw(data: any): void {
                var circleRadius = 7;
                if (data.type === 'point') {
                    var circle = new Chartist.Svg('circle', {
                        cx: data.x,
                        cy: data.y,
                        r: circleRadius,
                        class: data.value.y === 3 || data.value.y === 45 ? 'ct-point-circle-transperent' : 'ct-point-circle'
                    });
                    data.element.replace(circle);
                }
            }

        },



    };
    // Widget Area chart 6 configuration Ends


    // Line area chart configuration Starts
    lineAreaChart: Chart = {
        type: 'Line',
        data: data['lineArea3'],
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
            }
        },
        events: {
            created(data: any): void {
                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'laGradient',
                    x1: 0,
                    y1: 1,
                    x2: 1,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(0, 201, 255, 1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(146, 254, 157, 1)'
                });

                defs.elem('linearGradient', {
                    id: 'laGradient1',
                    x1: 0,
                    y1: 1,
                    x2: 1,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(132, 60, 247, 1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(56, 184, 242, 1)'
                });
            },
            draw(data: any): void {

                var circleRadius = 6;
                if (data.type === 'point') {
                    var circle = new Chartist.Svg('circle', {
                        cx: data.x,
                        cy: data.y,
                        r: circleRadius,
                        class: data.value.y === 0 ? 'ct-point-circle-transperent' :  'ct-point-circle'
                    });
                    data.element.replace(circle);
                }
            }
        },
    };
    // Line area chart configuration Ends

    // Line chart configuration Starts
    lineChart2: Chart = {
        type: 'Line', data: data['line2'],
        options: {
            axisX: {
                showGrid: false,
            },
            axisY: {
                low: 0,
                scaleMinSpace: 50,
            },
            fullWidth: true,
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
        events: {
            created(data: any): void {
                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'lineGradient1',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(252,157,48, 1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(250,91,76, 1)'
                });
                defs.elem('linearGradient', {
                    id: 'lineGradient2',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(45,121,255,1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(249,81,255, 1)'
                });
            },
            draw(data: any): void {
                var circleRadius = 8;
                if (data.type === 'point') {
                    var circle = new Chartist.Svg('circle', {
                        cx: data.x,
                        cy: data.y,
                        r: circleRadius,
                        class: 'ct-circle'
                    });
                    data.element.replace(circle);
                }
                else if (data.type === 'label') {
                    // adjust label position for rotation
                    const dX = data.width / 2 + (30 - data.width)
                    data.element.attr({ x: data.element.attr('x') - dX })
                }
            }
        },

    }
    // Line chart configuration Ends
 // Line with Area Chart 6 Starts
 lineArea6: Chart = {
    type: 'Line',
    data: data['lineArea6'],
    options: {
        low: 0,
        fullWidth: true,
        showArea: true,
        onlyInteger: true,
        axisY: {
            low: 0,
            scaleMinSpace: 50,
        },
        axisX: {
            showGrid: false
        },
        // lineSmooth: Chartist.Interpolation.simple({
        //     divisor: 4
        // }),
    },
    events: {
        created(data: any): void {
            var defs = data.svg.elem('defs');
            defs.elem('linearGradient', {
                id: 'linear6',
                x1: 0,
                y1: 1,
                x2: 0,
                y2: 0
            }).elem('stop', {
                offset: 0,
                'stop-color': 'rgba(45,121,255,1)'
            }).parent().elem('stop', {
                offset: 1,
                'stop-color': 'rgba(249,81,255, 1)'
            });

            defs.elem('linearGradient', {
                id: 'gradient6',
                x1: 0,
                y1: 0,
                x2: 1,
                y2: 0
            }).elem('stop', {
                offset: 0.2,
                'stop-color': 'rgba(200,220,255, 1)'
            }).parent().elem('stop', {
                offset: 1,
                'stop-color': 'rgba(247,250,255, 1)'
            });
        },
        draw(data: any): void {
          
            var circleRadius = 10;
            if (data.type === 'point') {
                var circle = new Chartist.Svg('circle', {
                    cx: data.x,
                    cy: data.y,
                    r: circleRadius,
                    class: data.value.y === 15 ? 'ct-point-circle' : 'ct-point-circle-transperent'
                });
                data.element.replace(circle);
            }
        }

    },
};
// Line with Area Chart 6 Ends

}