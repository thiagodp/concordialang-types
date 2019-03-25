import { Location } from "../ast/Location";
/**
 * Provides an exception that contains information about the location of an error in a line.
 *
 * @author Thiago Delgado Pinto
 */
export declare abstract class LocatedException extends Error {
    location?: Location;
    constructor(message?: string, location?: Location);
    static makeExceptionMessage(originalMessage?: string, location?: Location): string;
}
