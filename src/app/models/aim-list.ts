import {of, Observable, filter, map} from "rxjs";
import {Aim, AimSpan} from "./aim"
import { TasksService } from "../services/tasks-service/tasks-service";

export enum ListType {
    Timespan,
    Tag
}

export interface AimList {
    getName() : string;
    getType(): ListType;
    getAims() : Observable<Aim[]>;
}

export class EmptyList implements AimList {

    constructor(private readonly name: string = "") {
    }

    getName(): string {
        return this.name;
    }

    getType(): ListType {
        return ListType.Tag;
    }

    getAims(): Observable<Aim[]> {
        return of();
    }
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

export class TimespannedList implements AimList {
    private readonly span: AimSpan = AimSpan.Month
    private readonly service: TasksService

    constructor(span: AimSpan, tasksService: TasksService) {
        this.span = span;
        this.service = tasksService;
    }
    
    public get timeSpan() : AimSpan {
        return this.span
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
        return this.service.getTasksByTimespan(this.timeSpan)
    }
}