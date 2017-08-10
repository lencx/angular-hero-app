import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 0, name: 'Zero' },
            { id: 1, name: 'Mr. Nice' },
            { id: 2, name: 'Bombasto' },
            { id: 3, name: 'Celeritas' },
            { id: 4, name: 'RubberMan' },
            { id: 5, name: 'Dynama' },
            { id: 6, name: 'Dr IQ' },
            { id: 7, name: 'Narco' },
            { id: 8, name: 'Magneta' }
        ];
        return {heroes};
    }
}
