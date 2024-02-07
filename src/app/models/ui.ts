import { Aim, AimSpan } from "./aim";

export class GroupedAims {
    constructor(
        public aims: Aim[],
        public year: number,
        public span: AimSpan,
        public spanValue: number) {
    }
}