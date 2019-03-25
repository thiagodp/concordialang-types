import { ContentNode } from "./Node";
import { NLPResult } from "../nlp/NLPResult";
export interface Step extends ContentNode {
    type: 'given' | 'when' | 'then' | 'and' | 'otherwise';
    nlpResult?: NLPResult;
    /**
     * May hold some information valuable to the user.
     */
    comment?: string;
    /** Whether the step belongs to a external Variant, which is relevant to Test Scenario generation. */
    external?: boolean;
    /** Indicates that the value that was generated is invalid */
    isInvalidValue?: boolean;
    /**
     * Action performed, such as "press", "type", "click", "tap", etc.
     *
     * e.g., drag "foo" from <#a> to <#b>   <-- "drag" is the action
     */
    action: string;
    /**
     * Action modifier, such as "not" in "not see".
     */
    actionModifier?: string;
    /**
     * Action option, such as "left" in "swipe left".
     */
    actionOptions?: string[];
    /**
     * In TestScripts they can be UI Literals, but never UI Elements.
     *
     * e.g., drag "foo" from <#a> to <#b>   <-- "#a" and "#b" are the targets
     */
    targets?: string[];
    /**
     * Widget types, retrieved from UI Element declarations.
     *
     * e.g., drag "foo" from <#a> to <#b>   <-- "#a" could be "tree" and "#b" could be "list"
     */
    targetTypes?: string[];
    /**
     * Values or numbers, never Constants.
     *
     * e.g., drag "foo" from <#a> to <#b>   <-- "foo" is the value
     */
    values?: string[] | number[];
}
export interface StepGiven extends Step {
    type: 'given';
}
export interface StepWhen extends Step {
    type: 'when';
}
export interface StepThen extends Step {
    type: 'then';
}
export interface StepAnd extends Step {
    type: 'and';
}
export interface StepOtherwise extends Step {
    type: 'otherwise';
}
