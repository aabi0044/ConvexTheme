import { Injectable } from '@angular/core';
import { Task } from './taskboard-ngrx.model';

@Injectable()
export class TaskBoardService {

    constructor() { }

    public todo: Task[] = [
        new Task(
            'Responsive',
            'Dragée cupcake powder jelly-o ice cream toffee donut.',
            'Feb 17',
            'Eliza Scott',
            'assets/img/portrait/small/avatar-s-3.jpg',
            'New'),
        new Task(
            'QA Testing',
            'Dragée cupcake powder jelly-o ice cream toffee donut.',
            'Feb 17',
            'Eliza Scott',
            'assets/img/portrait/small/avatar-s-3.jpg',
            'New'),
        new Task(
            'Budget',
            'Dragée cupcake powder jelly-o ice cream toffee donut.',
            'Feb 17',
            'Eliza Scott',
            'assets/img/portrait/small/avatar-s-3.jpg',
            'New')
    ];

    public inProcess: Task[] = [
        new Task(
            'checklist',
            'Dragée cupcake powder jelly-o ice cream toffee donut.',
            'Dec 11',
            'Bruce Lee',
            'assets/img/portrait/small/avatar-s-1.jpg',
            'In Process'),
        new Task(
            'Navigation',
            'Dragée cupcake powder jelly-o ice cream toffee donut.',
            'Dec 11',
            'Bruce Lee',
            'assets/img/portrait/small/avatar-s-1.jpg',
            'In Process'),
        new Task(
            'Bootstrap 4',
            'Dragée cupcake powder jelly-o ice cream toffee donut.',
            'Dec 11',
            'Bruce Lee',
            'assets/img/portrait/small/avatar-s-1.jpg',
            'In Process')
    ];

    public backLog: Task[] = [
        new Task(
            'Assessment',
            'Dragée cupcake powder jelly-o ice cream toffee donut.',
            'July 9',
            'Parsy Reyes',
            'assets/img/portrait/small/avatar-s-5.jpg',
            'Pending'),
        new Task(
            'Schedule',
            'Dragée cupcake powder jelly-o ice cream toffee donut.',
            'July 9',
            'Parsy Reyes',
            'assets/img/portrait/small/avatar-s-5.jpg',
            'Pending'),
        new Task(
            'Unit tests',
            'Dragée cupcake powder jelly-o ice cream toffee donut.',
            'July 9',
            'Parsy Reyes',
            'assets/img/portrait/small/avatar-s-5.jpg',
            'Pending')
    ];

    public completed: Task[] = [
        new Task(
            'Angular 5',
            'Dragée cupcake powder jelly-o ice cream toffee donut.',
            'May 28',
            'Faran Ali',
            'assets/img/portrait/small/avatar-s-7.jpg',
            'Completed'),
        new Task(
            'Fields',
            'Dragée cupcake powder jelly-o ice cream toffee donut.',
            'May 28',
            'Faran Ali',
            'assets/img/portrait/small/avatar-s-7.jpg',
            'Completed'),
        new Task(
            'Task board',
            'Dragée cupcake powder jelly-o ice cream toffee donut.',
            'May 28',
            'Faran Ali',
            'assets/img/portrait/small/avatar-s-7.jpg',
            'Completed')
    ];

    addNewTask(title: string, message: string) {
        this.todo.push(new Task(
            title,
            message,
            'Nov 12',
            'Eliza Scott',
            'assets/img/portrait/small/avatar-s-3.jpg',
            'New'
        ))
    }
    gettodo() {
        return this.todo;
      }
}