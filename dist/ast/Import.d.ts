import { ValuedNode } from './Node';
/**
 * Import node.
 *
 * @author Thiago Delgado Pinto
 * @see /doc/langspec/asl-en.md
 */
export interface Import extends ValuedNode {
    resolvedPath?: string;
}
