import { Chat } from '../chat-ngrx.model';
import * as ChatActions from './chat.actions';

export interface FeatureState {
    chat: State;
}

export interface State {
    chat1: Chat[];
    chat2: Chat[];
    chat3: Chat[];
    chat4: Chat[];
    chat5: Chat[];
    chat6: Chat[];
    chat7: Chat[];
}

const initialState: State = {
    chat1: [
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
    ],
    chat2: [
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
    ],
    chat3: [
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
    ],
    chat4: [
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
    ],
    chat5: [
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
    ],
    chat6: [
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
    ],
    chat7: [
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
    ]

};

export function chatReducer(state = initialState, action: ChatActions.ChatActions) {
    switch (action.type) {       
        case (ChatActions.ADD_CHAT1):
            const chat1 = [...state.chat1];
            return {
                ...state,
                chat1: [...state.chat1, action.payload]
            };
        case (ChatActions.ADD_CHAT2):
            const chat2 = [...state.chat2];
            return {
                ...state,
                chat2: [...state.chat2, action.payload]
            };
        case (ChatActions.ADD_CHAT3):
            const chat3 = [...state.chat3];
            return {
                ...state,
                chat3: [...state.chat3, action.payload]
            };
        case (ChatActions.ADD_CHAT4):
            const chat4 = [...state.chat4];
            return {
                ...state,
                chat4: [...state.chat4, action.payload]
            };
        case (ChatActions.ADD_CHAT5):
            const chat5 = [...state.chat5];
            return {
                ...state,
                chat5: [...state.chat5, action.payload]
            };
        case (ChatActions.ADD_CHAT6):
            const chat6 = [...state.chat6];
            return {
                ...state,
                chat6: [...state.chat6, action.payload]
            };
        case (ChatActions.ADD_CHAT7):
            const chat7 = [...state.chat7];
            return {
                ...state,
                chat7: [...state.chat7, action.payload]
            };
        default:
            return state;
    }
}
