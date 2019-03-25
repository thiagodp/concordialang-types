import { DatabaseInterface } from './DatabaseInterface';
import { LocatedException } from './LocatedException';
import { InMemoryTableInterface } from './InMemoryTableInterface';
export declare enum ConnectionType {
    IN_MEMORY_TABLE = 0,
    DATABASE = 1
}
export declare class ConnectionResult_ {
    type: ConnectionType;
    intf: DatabaseInterface | InMemoryTableInterface;
    error: LocatedException | null;
    private constructor();
    static forTable(intf: InMemoryTableInterface, error?: LocatedException): ConnectionResult_;
    static forDatabase(intf: DatabaseInterface, error?: LocatedException): ConnectionResult_;
}
export declare class ConnectionContext {
    map: Map<string, ConnectionResult_>;
}
/**
 * Connection result.
 *
 * @author Thiago Delgado Pinto
 */
export interface ConnectionResult {
    databaseName: string;
    success: boolean;
    errors: LocatedException[];
    dbi: DatabaseInterface;
}
/**
 * Connection check result.
 *
 * @author Thiago Delgado Pinto
 */
export declare class ConnectionCheckResult {
    success: boolean;
    resultsMap: object;
    constructor(success?: boolean, resultsMap?: object);
    succeededResults(): ConnectionResult[];
}
