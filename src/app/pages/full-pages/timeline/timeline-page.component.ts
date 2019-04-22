import { Component } from '@angular/core';
import { TimelineElement } from './component/timeline-element';

@Component({
    selector: 'app-timeline-page',
    templateUrl: './timeline-page.component.html',
    styleUrls: ['./timeline-page.component.scss']
})

export class TimelinePageComponent {

    content = `Sugar plum pastry pie tart marzipan gummi bears croissant apple pie topping. Biscuit wafer topping croissant pastry cookie jujubes. Chupa chups cake danish pie jelly halvah tootsie roll pie. Powder croissant jelly jujubes donut lollipop. Powder halvah sweet gummies cake biscuit. Cake sweet roll oat cake sweet roll. Pudding pudding muffin marshmallow donut apple pie jelly beans apple pie. Chupa chups candy dragée candy gummi bears danish jelly beans pie cake. Icing apple pie powder marshmallow.`;

    timeline: TimelineElement[] = [
        { date: new Date(2017, 7, 11), selected: true, title: 'Horizontal Timeline', content: this.content },
        { date: new Date(2017, 8, 18), title: 'Event title here', content: this.content },
        { date: new Date(2017, 9, 20), title: 'Event title here', content: this.content },
        { date: new Date(2017, 10, 21), title: 'Event title here', content: this.content },
        { date: new Date(2017, 11, 9), title: 'Event title here', content: this.content },
        { date: new Date(2017, 12, 27), title: 'Event title here', content: this.content },
        { date: new Date(2018, 1, 10), title: 'Event title here', content: this.content },
        { date: new Date(2018, 3, 15), title: 'Event title here', content: this.content },
        { date: new Date(2018, 4, 12), title: 'Event title here', content: this.content },
        { date: new Date(2018, 5, 28), title: 'Event title here', content: this.content },
        { date: new Date(2018, 6, 3), title: 'Event title here', content: this.content },
    ];

}