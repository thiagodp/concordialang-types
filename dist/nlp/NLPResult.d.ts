/**
 * NLP Result. Currently it has the same structure of Bravey's NlpResult.
 *
 * @author Thiago Delgado Pinto
 */
export interface NLPResult {
    found: number;
    entities: Array<NLPEntity>;
    entitiesIndex: Map<string, NLPEntity>;
    intent: string;
    score: number;
    text: string;
}
/**
 * NLP Entity. Currently it has the same structure of Bravey's Entity.
 *
 * @author Thiago Delgado Pinto
 */
export interface NLPEntity {
    entity: string;
    string: string;
    position: number;
    value: any;
    priority: number;
}
export declare class NLPUtil {
    entitiesNamed(name: string, nlpResult: NLPResult): NLPEntity[];
    hasEntityNamed(name: string, nlpResult: NLPResult): boolean;
    /**
     * Returns true if the NLPResult has all the informed entity names.
     *
     * @param names
     * @param nlpResult
     */
    hasEntitiesNamed(names: string[], nlpResult: NLPResult): boolean;
    entityNamed(name: string, nlpResult: NLPResult): NLPEntity | null;
    valuesOfEntitiesNamed(name: string, nlpResult: NLPResult): string[];
}
