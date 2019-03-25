import { Step } from './Step';
/**
 * VariantLike is **not** a node.
 *
 * @author Thiago Delgado Pinto
 */
export interface VariantLike {
    sentences: Step[];
    preconditions?: State[];
    stateCalls?: State[];
}
/**
 * State is **not** a node.
 *
 * @author Thiago Delgado Pinto
 */
export declare class State {
    name: string;
    stepIndex: number;
    constructor(name: string, stepIndex: number);
    toString(): string;
    equals(state: State): boolean;
    nameEquals(name: string): boolean;
}
