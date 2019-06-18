import { Node, HasName, HasContent } from './Node';
/**
 * Tag node.
 *
 * @author Thiago Delgado Pinto
 */
export interface Tag extends Node, HasName, HasContent {
    subType?: ReservedTags;
}
/**
 * Reserved tags.
 *
 * @author Thiago Delgado Pinto
 */
export declare enum ReservedTags {
    GENERATED = "generated",
    FAIL = "fail",
    FEATURE = "feature",
    SCENARIO = "scenario",
    VARIANT = "variant",
    GLOBAL = "global",
    IGNORE = "ignore",
    IMPORTANCE = "importance",
    GENERATE_ONLY_VALID_VALUES = "generate-only-valid-values"
}
/**
 * Allows to define something that may have tags.
 *
 * @author Thiago Delgado Pinto
 */
export interface MayHaveTags {
    tags?: Tag[];
}
/**
 * Returns true if the one of the given tags has the given name.
 *
 * @param name Tag name
 * @param tags Tags where to find
 */
export declare function hasTagNamed(name: string, tags: Tag[]): boolean;
export declare function tagsWithAnyOfTheNames(tags: Tag[], names: string[]): Tag[];
