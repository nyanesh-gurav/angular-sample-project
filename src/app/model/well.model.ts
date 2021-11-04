export class WellModel {
    name?: string;
    type?: string;
    sourceKey?: number;
    constructor(name?: string, type?: string,sourceKey?:number) {
        this.name = name;
        this.type = type;
        this.sourceKey=sourceKey;
    }
}