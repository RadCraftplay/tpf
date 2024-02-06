import {of, Observable, filter, map} from "rxjs";
import {Aim, AimSpan} from "./aim"

export enum ListType {
    Timespan,
    Tag
}

export interface AimList {
    getName() : string;
    getType(): ListType;
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

    getType(): ListType {
        return ListType.Tag;
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
            spanType: 2,
            spanValue: 2
        }]);

        return emitter;
    }
}

export class DummySpannedList implements AimList {
    private readonly span: AimSpan
    private readonly inner: AimList

    constructor(span: AimSpan, inner: AimList) {
        this.span = span;
        this.inner = inner;
    }

    getName(): string {
        switch(this.span) {
            case AimSpan.Month:
                return "Miesiące"
            case AimSpan.Week:
                return "Tygodnie"
            case AimSpan.Year:
                return "Lata"
            default:
                throw new Error("Method not implemented.");
        }
    }

    getType(): ListType {
        return ListType.Timespan;
    }

    getAims(): Observable<Aim[]> {
        const spanNum = this.span.valueOf()

        return this.inner.getAims().pipe(
            map(aims => aims.filter(
                aim => aim.spanType === spanNum)
            )
        )
    }
}