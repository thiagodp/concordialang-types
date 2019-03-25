import { Node, HasName, HasContent } from './Node';
/**
 * Tag node.
 *
 * @author Thiago Delgado Pinto
 */
export interface Tag extends Node, HasName, HasContent {
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
