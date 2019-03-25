import { Entities } from '../nlp/Entities';
import { NLPResult } from '../nlp/NLPResult';
import { Document } from './Document';
import { Feature } from './Feature';
import { ListItem } from './ListItem';
import { NamedNode, Node } from './Node';
import { Step } from './Step';
import { MayHaveTags } from './Tag';
/**
 * UI element node.
 *
 * @author Thiago Delgado Pinto
 */
export interface UIElement extends NamedNode, MayHaveTags {
    items: UIProperty[];
    info?: UIElementInfo;
}
/**
 * UI property node.
 *
 * @author Thiago Delgado Pinto
 */
export interface UIProperty extends ListItem {
    otherwiseSentences: Step[];
    nlpResult: NLPResult;
    property: string;
    value: EntityValue;
}
/**
 * Additional information about an UI element.
 *
 * @author Thiago Delgado Pinto
 */
export declare class UIElementInfo {
    document: Document;
    uiLiteral: string;
    feature: Feature;
    fullVariableName: string;
    /**
     *
     * @param document Document in which the UI element was declared
     * @param uiLiteral Literal
     * @param feature Feature where the UI Element was declared. A `null` value denotes a *global* UI Element.
     */
    constructor(document?: Document, uiLiteral?: string, feature?: Feature, fullVariableName?: string);
    isGlobal(): boolean;
}
export declare type EntityValueType = null | string | number | boolean | any[];
/**
 * Recognized value of an entity.
 *
 * @author Thiago Delgado Pinto
 */
export declare class EntityValue {
    entity: Entities;
    value: EntityValueType;
    references: Node[];
    /**
     *
     * @param entity Entity
     * @param value Recognized value, e.g., "SELECT * FROM [MyDB].[Foo]"
     * @param references References nodes, e.g., the database [MyDB] and the table [Foo].
     */
    constructor(entity: Entities, value: EntityValueType, references?: Node[]);
}
