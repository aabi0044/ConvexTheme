import { Injectable } from '@angular/core';
import { Chat } from './chat.model';

@Injectable()
export class ChatService {

    constructor() { }

    public chat1: Chat[] = [
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'How can we help? We are here for you!'
            ],
            'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-8.jpg',
            '1 hour ago',
            [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 5 bootstrap compatible.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '30 minutes ago',
            [
                'Absolutely!',
                'Convex admin template is responsive Angular 6+ bootstrap admin template.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-8.jpg',
            '20 minutes ago',
            [
                'Can you provide me audio link?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ]
            , 'audio'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-8.jpg',
            '10 minutes ago',
            [
                'Can you provide me video link?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ]
            , 'video'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-8.jpg',
            'just now',
            [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'Thanks, from ThemeForest.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-8.jpg',
            '',
            [
                'I will purchase it for sure.',
                'Thanks.'
            ]
            , 'text'),
    ];
    public chat2: Chat[] = [
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'How can we help'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-7.jpg',
            '1 hours ago',
            [
                'Hi, I spoke with a representative yesterday.',
                'he gave me some steps to fix my problem',
                'but they didn’t help.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '20 minutes ago',
            [
                'Can you provide me audio link of your conversation?'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-7.jpg',
            '',
            [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ]
            , 'audio'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '10 minutes ago',
            [
                'Can you provide me video link of your issue?'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-7.jpg',
            '',
            [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ]
            , 'video'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'I’m sorry to hear that',
                'Can I ask which model of projector you own?',
                'What steps did he suggest you to take?',
                'What sort of issue are you having?'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-7.jpg',
            '',
            [
                'An issue with the power.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'Did you make sure the outlet you plugged it into was functional.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-7.jpg',
            '',
            [
                'Yes'
            ]
            , 'text'),
    ];
    public chat3: Chat[] = [
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'How can we help'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-8.jpg',
            '1 hours ago',
            [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 5 bootstrap compatible.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'Absolutely!',
                'Convex admin template is responsive Angular 6+ bootstrap admin template.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-8.jpg',
            '20 minutes ago',
            [
                'Can you provide me audio link?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ]
            , 'audio'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-8.jpg',
            '10 minutes ago',
            [
                'Can you provide me video link?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ]
            , 'video'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-8.jpg',
            '',
            [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'Thanks, from ThemeForest.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-8.jpg',
            '',
            [
                'I will purchase it for sure.',
                'Thanks.'
            ]
            , 'text'),
    ];
    public chat4: Chat[] = [
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'How can we help'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-5.jpg',
            '1 hours ago',
            [
                'Hi, I spoke with a representative yesterday.',
                'he gave me some steps to fix my problem',
                'but they didn’t help.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '20 minutes ago',
            [
                'Can you provide me audio link of your conversation?'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-5.jpg',
            '',
            [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ]
            , 'audio'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '10 minutes ago',
            [
                'Can you provide me video link of your issue?'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-5.jpg',
            '',
            [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ]
            , 'video'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'I’m sorry to hear that',
                'Can I ask which model of projector you own?',
                'What steps did he suggest you to take?',
                'What sort of issue are you having?'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-5.jpg',
            '',
            [
                'An issue with the power.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'Did you make sure the outlet you plugged it into was functional.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-5.jpg',
            '',
            [
                'Yes'
            ]
            , 'text'),
    ];
    public chat5: Chat[] = [
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'How can we help'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-9.jpg',
            '1 hours ago',
            [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 5 bootstrap compatible.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'Absolutely!',
                'Convex admin template is responsive Angular 6+ bootstrap admin template.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-9.jpg',
            '20 minutes ago',
            [
                'Can you provide me audio link?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ]
            , 'audio'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-9.jpg',
            '10 minutes ago',
            [
                'Can you provide me video link?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ]
            , 'video'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-9.jpg',
            '',
            [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'Thanks, from ThemeForest.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-9.jpg',
            '',
            [
                'I will purchase it for sure.',
                'Thanks.'
            ]
            , 'text'),
    ];
    public chat6: Chat[] = [
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'How can we help'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-4.jpg',
            '1 hours ago',
            [
                'Hi, I spoke with a representative yesterday.',
                'he gave me some steps to fix my problem',
                'but they didn’t help.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '20 minutes ago',
            [
                'Can you provide me audio link of your conversation?'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-4.jpg',
            '',
            [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ]
            , 'audio'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '10 minutes ago',
            [
                'Can you provide me video link of your issue?'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-4.jpg',
            '',
            [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ]
            , 'video'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'I’m sorry to hear that',
                'Can I ask which model of projector you own?',
                'What steps did he suggest you to take?',
                'What sort of issue are you having?'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-4.jpg',
            '',
            [
                'An issue with the power.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'Did you make sure the outlet you plugged it into was functional.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-4.jpg',
            '',
            [
                'Yes'
            ]
            , 'text'),
    ];
    public chat7: Chat[] = [
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'How can we help'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-14.jpg',
            '1 hours ago',
            [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 4 bootstrap compatible.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'Absolutely!',
                'Convex admin template is responsive Angular 6+ bootstrap admin template.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-14.jpg',
            '20 minutes ago',
            [
                'Can you provide me audio link?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ]
            , 'audio'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-14.jpg',
            '10 minutes ago',
            [
                'Can you provide me video link?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ]
            , 'video'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-14.jpg',
            '',
            [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.jpg',
            '',
            [
                'Thanks, from ThemeForest.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-14.jpg',
            '',
            [
                'I will purchase it for sure.',
                'Thanks.'
            ]
            , 'text'),
    ];
}