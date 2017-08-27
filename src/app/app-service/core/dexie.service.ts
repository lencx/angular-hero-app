import Dexie from 'dexie';

export class DexieService extends Dexie {
    constructor() {
        super('lencx_hero');
        this.version(1).stores({
            dxheroes: '++id',
        });
    }
}
