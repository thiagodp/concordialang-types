export interface RuleCond {
    operator: 'eq' | 'neq' | 'lt' | 'lte' | 'gt' | 'gte' | 'bw' | 'nbw' | 'in' | 'nin' | 'lk' | 'nlk' | 'st' | 'nst' | 'en' | 'nen' | 'co' | 'nco';
    target: 'val' | 'uie' | 'qry' | 'rex' | 'ren';
    content: string | number | Array<string | number>;
    property?: string;
    targetColumn?: string;
    or: Array<RuleCond>;
}
export interface RuleDef {
    property: string;
    condition: RuleCond;
}
export interface SharedRule {
    name: string;
    defs: Array<RuleDef>;
}
export interface Rule {
    uiElementName: string;
    defs?: Array<RuleDef>;
    sharedRule?: SharedRule;
}
