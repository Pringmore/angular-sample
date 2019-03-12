export class Categorie {
    id: number;
    title: string;
    description: string;

    constructor (datas : Object = {}) {
        Object.assign(this, datas);
    }
};