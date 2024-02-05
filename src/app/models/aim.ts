export enum AimSpan {
    Week = 1,
    Month,
    Year
}

export enum AimPriority {
    None = 1,
    Low,
    Medium,
    High
}

export interface Aim {
    id: string;
    name: string;
    priority: number;
    description: string;
    tags: string[];
    done: boolean;

    year: number;
    spanType: number;
    spanValue: number;
}