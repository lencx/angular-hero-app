import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 1, name: 'Mr. Nice', avatar: '/assets/img/avatar/1.jpg' },
            { id: 2, name: 'Bombasto', avatar: '/assets/img/avatar/2.jpg' },
            { id: 3, name: 'Celeritas', avatar: '/assets/img/avatar/3.jpg' },
            { id: 4, name: 'RubberMan', avatar: '/assets/img/avatar/4.jpg' },
            { id: 5, name: 'Dynama', avatar: '/assets/img/avatar/5.jpg' },
            { id: 6, name: 'Dr IQ', avatar: '/assets/img/avatar/6.jpg' },
            { id: 7, name: 'Narco', avatar: '/assets/img/avatar/7.jpg' },
            { id: 8, name: 'Magneta', avatar: '/assets/img/avatar/8.jpg' },
            { id: 9, name: 'Zero', avatar: '/assets/img/avatar/9.jpg' }
        ];
        return {heroes};
    }
}
