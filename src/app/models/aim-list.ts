import {of, Observable} from "rxjs";
import {Aim} from "./aim"

export interface AimList {
    getName() : string;
    canAdd(): boolean;
    getAims() : Observable<Aim[]>;
}

export class DummyTagList implements AimList {

    private readonly tagName: string;

    constructor(tag: string) {
        this.tagName =  tag;
    }   

    getName(): string {
        return "#" + this.tagName;
    }

    canAdd(): boolean {
        return false;
    }
    
    getAims(): Observable<Aim[]> {
        const emitter : Observable<Aim[]> = of([
        {
            id: "1",
            name: "Przykładowe zadanie",
            owner: "radcraftplay2@gmail.com",
            priority: 1,
            description: "Opis zadania",
            done: false,
            tags: [ "przyklad" ],
            year: 2024,
            spanType: 1,
            spanValue: 1
        },
        {
            id: "2",
            name: "Zadanie zrobione",
            owner: "radcraftplay2@gmail.com",
            priority: 1,
            description: "Opis skończonego zadania",
            done: true,
            tags: [ "przyklad", "ukończone" ],
            year: 2024,
            spanType: 1,
            spanValue: 1
        }]);

        return emitter;
    }
}